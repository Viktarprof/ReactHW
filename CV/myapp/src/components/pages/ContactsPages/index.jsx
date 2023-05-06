import React from "react";
import s from "./index.module.css";

function ContactsPages() {
  return (
    <div>
      <div className={s.contactsContainer}>
        <h1>Contact</h1>

        <div className={s.info}>
          <p>
            <strong>Phone:</strong> +48 57 53 76 2976
          </p>
          <p>
            <strong>Email:</strong> kaloshaviktor1@gmail.com
          </p>
          <p>
            <strong>Address:</strong> 15-301 Bilystok, Poland
          </p>
        </div>
      </div>
    </div>
  );
}

export default ContactsPages;
