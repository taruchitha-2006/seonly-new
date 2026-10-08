import { useEffect, useState } from 'react';

function Contacts() {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_BASE_URL}/api/contacts`
        );

        const data = await response.json();

        if (!response.ok) {
          throw new Error(
            data.message || 'Unable to load contact enquiries.'
          );
        }

        setContacts(data.contacts);
      } catch (err) {
        setError(
          err.message ||
            'Unable to connect to the SEOOnly backend.'
        );
      } finally {
        setLoading(false);
      }
    };

    fetchContacts();
  }, []);

  return (
    <section className="contacts-page">
      <div className="container">
        <div className="contacts-header">
          <div>
            <span className="section-label">
              CONTACT ENQUIRIES
            </span>

            <h1>Saved Contact Enquiries</h1>

            <p>
              View enquiries submitted through the SEOOnly
              website.
            </p>
          </div>

          <div className="contacts-count">
            <strong>{contacts.length}</strong>
            <span>Total Enquiries</span>
          </div>
        </div>

        {loading && (
          <div className="contacts-message">
            Loading contact enquiries...
          </div>
        )}

        {error && (
          <div className="contacts-message contacts-error">
            {error}
          </div>
        )}

        {!loading && !error && contacts.length === 0 && (
          <div className="contacts-message">
            No contact enquiries have been submitted yet.
          </div>
        )}

        {!loading && !error && contacts.length > 0 && (
          <div className="contacts-list">
            {contacts.map((contact) => (
              <article
                className="contact-enquiry-card"
                key={contact.id}
              >
                <div className="contact-enquiry-header">
                  <div>
                    <span className="contact-enquiry-id">
                      ENQUIRY #{contact.id}
                    </span>

                    <h2>{contact.name}</h2>
                  </div>

                  <span className="contact-enquiry-date">
                    {new Date(
                      contact.created_at
                    ).toLocaleString()}
                  </span>
                </div>

                <div className="contact-enquiry-details">
                  <div className="contact-detail-box">
                    <span>EMAIL</span>

                    <a
                      href={`mailto:${contact.email}`}
                    >
                      {contact.email}
                    </a>
                  </div>

                  <div className="contact-detail-box">
                    <span>PHONE</span>

                    <p>
                      {contact.phone || 'Not provided'}
                    </p>
                  </div>

                  <div className="contact-detail-box">
                    <span>COMPANY</span>

                    <p>
                      {contact.company || 'Not provided'}
                    </p>
                  </div>
                </div>

                <div className="contact-enquiry-message">
                  <span>MESSAGE</span>

                  <p>{contact.message}</p>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default Contacts;