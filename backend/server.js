const express = require('express');
const cors = require('cors');
const path = require('path');

require('dotenv').config();

const db = require('./database');

const app = express();

const PORT = Number(process.env.PORT) || 5000;

// React production build location
const frontendDistPath = path.join(__dirname, '..', 'dist');

// -------------------------
// Middleware
// -------------------------

app.use(cors());
app.use(express.json());

// -------------------------
// Backend health route
// -------------------------

app.get('/api/health', (req, res) => {
  res.json({
    success: true,
    message: 'SEOOnly backend is running',
  });
});

// -------------------------
// SEO Audit - Create
// -------------------------

app.post('/api/audit', (req, res) => {
  try {
    const { website } = req.body;

    if (!website || !website.trim()) {
      return res.status(400).json({
        success: false,
        message: 'Website URL is required',
      });
    }

    const websiteUrl = website.trim();

    let parsedUrl;

    try {
      parsedUrl = new URL(websiteUrl);
    } catch (error) {
      return res.status(400).json({
        success: false,
        message: 'Please enter a valid website URL.',
      });
    }

    if (!['http:', 'https:'].includes(parsedUrl.protocol)) {
      return res.status(400).json({
        success: false,
        message: 'Website URL must start with http:// or https://',
      });
    }

    if (!parsedUrl.hostname) {
      return res.status(400).json({
        success: false,
        message: 'Please enter a valid website domain.',
      });
    }

    const audit = {
      seoHealth: 78,
      technicalSeo: 'Good',
      contentQuality: 'Good',
      aiSearchVisibility: 'Improve',
      authoritySignals: 'Improve',
    };

    const insertAudit = db.prepare(`
      INSERT INTO seo_audits (
        website,
        seo_health,
        technical_seo,
        content_quality,
        ai_search_visibility,
        authority_signals
      )
      VALUES (?, ?, ?, ?, ?, ?)
    `);

    const result = insertAudit.run(
      websiteUrl,
      audit.seoHealth,
      audit.technicalSeo,
      audit.contentQuality,
      audit.aiSearchVisibility,
      audit.authoritySignals
    );

    res.status(201).json({
      success: true,
      message: 'SEO audit request received and saved',
      auditId: result.lastInsertRowid,
      website: websiteUrl,
      audit,
    });
  } catch (error) {
    console.error('Error creating audit:', error);

    res.status(500).json({
      success: false,
      message: 'Unable to create SEO audit.',
    });
  }
});

// -------------------------
// SEO Audits - Get All
// -------------------------

app.get('/api/audits', (req, res) => {
  try {
    const audits = db
      .prepare(`
        SELECT
          id,
          website,
          seo_health,
          technical_seo,
          content_quality,
          ai_search_visibility,
          authority_signals,
          created_at
        FROM seo_audits
        ORDER BY created_at DESC
      `)
      .all();

    res.json({
      success: true,
      count: audits.length,
      audits,
    });
  } catch (error) {
    console.error('Error fetching audits:', error);

    res.status(500).json({
      success: false,
      message: 'Unable to fetch audits',
    });
  }
});

// -------------------------
// SEO Audit - Get One
// -------------------------

app.get('/api/audits/:id', (req, res) => {
  try {
    const { id } = req.params;

    const audit = db
      .prepare(`
        SELECT
          id,
          website,
          seo_health,
          technical_seo,
          content_quality,
          ai_search_visibility,
          authority_signals,
          created_at
        FROM seo_audits
        WHERE id = ?
      `)
      .get(id);

    if (!audit) {
      return res.status(404).json({
        success: false,
        message: 'Audit not found',
      });
    }

    res.json({
      success: true,
      audit,
    });
  } catch (error) {
    console.error('Error fetching audit:', error);

    res.status(500).json({
      success: false,
      message: 'Unable to fetch audit',
    });
  }
});

// -------------------------
// SEO Audit - Delete One
// -------------------------

app.delete('/api/audits/:id', (req, res) => {
  try {
    const { id } = req.params;

    const existingAudit = db
      .prepare(`
        SELECT id
        FROM seo_audits
        WHERE id = ?
      `)
      .get(id);

    if (!existingAudit) {
      return res.status(404).json({
        success: false,
        message: 'Audit not found',
      });
    }

    db.prepare(`
      DELETE FROM seo_audits
      WHERE id = ?
    `).run(id);

    res.json({
      success: true,
      message: 'Audit deleted successfully',
      auditId: Number(id),
    });
  } catch (error) {
    console.error('Error deleting audit:', error);

    res.status(500).json({
      success: false,
      message: 'Unable to delete audit',
    });
  }
});

// -------------------------
// Contact - Create
// -------------------------

app.post('/api/contact', (req, res) => {
  try {
    const {
      name,
      email,
      phone,
      company,
      message,
    } = req.body;

    if (!name || !name.trim()) {
      return res.status(400).json({
        success: false,
        message: 'Name is required.',
      });
    }

    if (!email || !email.trim()) {
      return res.status(400).json({
        success: false,
        message: 'Email is required.',
      });
    }

    if (!message || !message.trim()) {
      return res.status(400).json({
        success: false,
        message: 'Message is required.',
      });
    }

    const emailValue = email.trim();

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(emailValue)) {
      return res.status(400).json({
        success: false,
        message: 'Please enter a valid email address.',
      });
    }

    const insertContact = db.prepare(`
      INSERT INTO contacts (
        name,
        email,
        phone,
        company,
        message
      )
      VALUES (?, ?, ?, ?, ?)
    `);

    const result = insertContact.run(
      name.trim(),
      emailValue,
      phone ? phone.trim() : '',
      company ? company.trim() : '',
      message.trim()
    );

    res.status(201).json({
      success: true,
      message: 'Your message has been received successfully.',
      contactId: result.lastInsertRowid,
    });
  } catch (error) {
    console.error('Error saving contact:', error);

    res.status(500).json({
      success: false,
      message: 'Unable to save your message.',
    });
  }
});

// -------------------------
// Contacts - Get All
// -------------------------

app.get('/api/contacts', (req, res) => {
  try {
    const contacts = db
      .prepare(`
        SELECT
          id,
          name,
          email,
          phone,
          company,
          message,
          created_at
        FROM contacts
        ORDER BY created_at DESC
      `)
      .all();

    res.json({
      success: true,
      count: contacts.length,
      contacts,
    });
  } catch (error) {
    console.error('Error fetching contacts:', error);

    res.status(500).json({
      success: false,
      message: 'Unable to fetch contacts.',
    });
  }
});

// -------------------------
// Contact - Get One
// -------------------------

app.get('/api/contacts/:id', (req, res) => {
  try {
    const { id } = req.params;

    const contact = db
      .prepare(`
        SELECT
          id,
          name,
          email,
          phone,
          company,
          message,
          created_at
        FROM contacts
        WHERE id = ?
      `)
      .get(id);

    if (!contact) {
      return res.status(404).json({
        success: false,
        message: 'Contact enquiry not found.',
      });
    }

    res.json({
      success: true,
      contact,
    });
  } catch (error) {
    console.error('Error fetching contact:', error);

    res.status(500).json({
      success: false,
      message: 'Unable to fetch contact.',
    });
  }
});

// -------------------------
// Contact - Delete One
// -------------------------

app.delete('/api/contacts/:id', (req, res) => {
  try {
    const { id } = req.params;

    const existingContact = db
      .prepare(`
        SELECT id
        FROM contacts
        WHERE id = ?
      `)
      .get(id);

    if (!existingContact) {
      return res.status(404).json({
        success: false,
        message: 'Contact enquiry not found.',
      });
    }

    db.prepare(`
      DELETE FROM contacts
      WHERE id = ?
    `).run(id);

    res.json({
      success: true,
      message: 'Contact enquiry deleted successfully.',
      contactId: Number(id),
    });
  } catch (error) {
    console.error('Error deleting contact:', error);

    res.status(500).json({
      success: false,
      message: 'Unable to delete contact',
    });
  }
});

// -------------------------
// Serve React frontend
// -------------------------

app.use(express.static(frontendDistPath));

// -------------------------
// React SPA fallback
// -------------------------

app.use((req, res, next) => {
  if (req.method !== 'GET' || req.path.startsWith('/api/')) {
    return next();
  }

  res.sendFile(path.join(frontendDistPath, 'index.html'));
});

// -------------------------
// Start server
// -------------------------

const server = app.listen(PORT, '0.0.0.0', () => {
  console.log(
    `SEOOnly server running on port ${PORT}`
  );

  console.log(
    `Frontend build path: ${frontendDistPath}`
  );
});

server.on('error', (error) => {
  console.error('SEOOnly server failed to start:', error);
});

server.on('listening', () => {
  console.log('Server is actively listening for requests.');
});