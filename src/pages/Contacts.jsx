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
          <div className="contacts-table-wrapper">
            <table className="contacts-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Company</th>
                  <th>Message</th>
                  <th>Created</th>
                </tr>
              </thead>

              <tbody>
                {contacts.map((contact) => (
                  <tr key={contact.id}>
                    <td>#{contact.id}</td>

                    <td>
                      <strong>{contact.name}</strong>
                    </td>

                    <td>{contact.email}</td>

                    <td>
                      {contact.phone || '—'}
                    </td>

                    <td>
                      {contact.company || '—'}
                    </td>

                    <td>
                      <span className="contact-message-text">
                        {contact.message}
                      </span>
                    </td>

                    <td>
                      {new Date(
                        contact.created_at
                      ).toLocaleString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </section>
  );
}

export default Contacts;