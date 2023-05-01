import React from "react";
import { BsTelephone } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { GoLocation } from "react-icons/go";
import s from "./ContactsPages.module.css";

function ContactsPages() {
  return (
    <div className="wrapper">
      <div className={s.contacts}>
        <div className={s.contacts_text}>
          <h1>Contacts</h1>
          <h3>
            Hi! I am looking forward to starting a joint project with you!
          </h3>
          <p>
            <BsTelephone style={{ color: "red", fontSize: "20" }} /> : +1 (234)
            567-891
          </p>
          <p>
            <HiOutlineMail style={{ color: "red", fontSize: "20" }} /> :
            John@gmail.com
          </p>
          <p>
            <GoLocation style={{ color: "red", fontSize: "20" }} /> : 1130
            BRIGHTON BEACH AVE BROOKLYN NY 11235-5519 USA{" "}
          </p>
        </div>

        <div className={s.wrap}>
          <div className={s.cube}>
            <div className={s.front}>
              <h3>
                Hi! I am looking forward to starting a joint project with you!
              </h3>
              <p>
                Number: <br /> +1 (234) 567-891
              </p>
              <p>
                Email: <br /> John@gmail.com
              </p>
              <p>
                Location <br /> 1130 BRIGHTON BEACH AVE BROOKLYN NY 11235-5519
                USA{" "}
              </p>
            </div>
            <div className={s.back}>
              <h3>
                Hi! I am looking forward to starting a joint project with you!
              </h3>
              <p>
                Number: <br /> +1 (234) 567-891
              </p>
              <p>
                Email: <br /> John@gmail.com
              </p>
              <p>
                Location <br /> 1130 BRIGHTON BEACH AVE BROOKLYN NY 11235-5519
                USA{" "}
              </p>
            </div>
            <div className={s.top}>
              <h3>
                Hi! I am looking forward to starting a joint project with you!
              </h3>
              <p>
                Number: <br /> +1 (234) 567-891
              </p>
              <p>
                Email: <br /> John@gmail.com
              </p>
              <p>
                Location <br /> 1130 BRIGHTON BEACH AVE BROOKLYN NY 11235-5519
                USA{" "}
              </p>
            </div>
            <div className={s.bottom}>
              <h3>
                Hi! I am looking forward to starting a joint project with you!
              </h3>
              <p>
                Number: <br /> +1 (234) 567-891
              </p>
              <p>
                Email: <br /> John@gmail.com
              </p>
              <p>
                {" "}
                Location <br /> 1130 BRIGHTON BEACH AVE BROOKLYN NY 11235-5519
                USA{" "}
              </p>
            </div>
            <div className={s.left}>
              <h3>
                Hi! I am looking forward to starting a joint project with you!
              </h3>
              <p>
                Number: <br /> +1 (234) 567-891
              </p>
              <p>
                Email: <br /> John@gmail.com
              </p>
              <p>
                {" "}
                Location <br /> 1130 BRIGHTON BEACH AVE BROOKLYN NY 11235-5519
                USA{" "}
              </p>
            </div>
            <div className={s.right}>
              <h3>
                Hi! I am looking forward to starting a joint project with you!
              </h3>
              <p>
                Number: <br /> +1 (234) 567-891
              </p>
              <p>
                Email: <br /> John@gmail.com
              </p>
              <p>
                {" "}
                Location <br /> 1130 BRIGHTON BEACH AVE BROOKLYN NY 11235-5519
                USA{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactsPages;
