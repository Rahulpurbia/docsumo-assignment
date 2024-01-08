import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./style.css";
import { Carousel } from "../../components/Carousel/Carousel";
import InputField from "../../components/InputField/InputField";
import { isFieldValid } from "../../utils/formvalidator";

const clients = [
  {
    name: "Arbor",
    logo: "https://assets-global.website-files.com/64be86eaa29fa71f24b00661/64be86eaa29fa71f24b00a99_Arbor%20Logo.svg",
  },
  {
    name: "National debt-relief",
    logo: "https://assets-global.website-files.com/64be86eaa29fa71f24b00661/64be86eaa29fa71f24b00a96_national%20logo.svg",
  },
  {
    name: "westland",
    logo: "https://assets-global.website-files.com/64be86eaa29fa71f24b00661/64be86eaa29fa71f24b00aaf_westland%20logo.svg",
  },
  {
    name: "jones",
    logo: "https://assets-global.website-files.com/64be86eaa29fa71f24b00661/64be86eaa29fa71f24b00aa1_jones%20logo.svg",
  },
  {
    name: "hitachi",
    logo: "https://assets-global.website-files.com/64be86eaa29fa71f24b00661/64be86eaa29fa71f24b00a8d_hitachi%20logo.svg",
  },
  {
    name: "clear-one",
    logo: "https://assets-global.website-files.com/64be86eaa29fa71f24b00661/64be86eaa29fa71f24b00a98_clear%20one%20logo.svg",
  },
  {
    name: "payu",
    logo: "https://assets-global.website-files.com/64be86eaa29fa71f24b00661/64be86eaa29fa71f24b00a8f_Payu%20Logo.svg",
  },
  {
    name: "biagi",
    logo: "https://assets-global.website-files.com/64be86eaa29fa71f24b00661/64be86eaa29fa71f24b00a9a_biagi%20logo.svg",
  },
];

const HomePage = () => {
  const [details, setDetails] = useState({
    full_name: {
      value: "",
      error: "",
      visited: false,
    },
    work_email: {
      value: "",
      error: "",
      visited: false,
    },
    phone_number: {
      value: "",
      error: "",
      visited: false,
    },
    company_name: {
      value: "",
      error: "",
      visited: false,
    },
    job_title: {
      value: "",
      error: "",
      visited: false,
    },
    no_of_docs: {
      value: "",
      error: "",
      visited: false,
    },
  });

  const validateField = (fieldName, fieldValue) => {
    setDetails((prev) => ({
      ...prev,
      [fieldName]: {
        value: fieldValue,
        error: isFieldValid(fieldName, fieldValue),
        visited: true,
      },
    }));
  };

  const validateForm = () => {
    for (let key in details) {
      validateField(key, details[key].value);
    }
  };

  const handleChange = (e) => {
    const inputValue = e.target.value;
    const inputName = e.target.name;

    validateField(inputName, inputValue);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validateForm();
    let noError = !Object.values(details).some(
      (data) => data.error !== "" || !data.visited
    );
    if (noError) {
      let formBody = {
        full_name: details?.full_name?.value,
        work_email: details?.work_email?.value,
        phone_number: details?.phone_number?.value,
        company_name: details?.company_name?.value,
        job_title: details?.job_title?.value,
        no_of_docs: details?.no_of_docs?.value,
      };
      fetch("https://webhook.site/a4f01968-888c-4d92-8211-a793a112fe5d", {
        method: "POST",
        body: JSON.stringify(formBody),
      })
        .then((response) => {
          //redirect to some page
          //reset state
        })
        .catch((error) => {
          //handle error
        });
    }
  };

  return (
    <>
      <main>
        <section className="hero-section bg-primary text-center text-white">
          <div className="hero-label text-grey">Document AI Platform</div>
          <h1 className="hero-heading">
            Extract data from <br /> unstructured documents
          </h1>
          <div className="hero-subheading">Easily.Efficiently.Accurately.</div>
          <div className="hero-cta">
            <button className="btn bg-secondary text-white font-500">
              Start free 14-days trial
            </button>
            <button className="btn text-secondary font-500 bg-default">
              Start Product Tour
            </button>
          </div>
          <small className="text-grey">No Credit Card Required</small>
          <div className="hero-achievements">
            <div className="d-flex justify-content-center achievements-text">
              <img
                src="https://assets-global.website-files.com/64be86eaa29fa71f24b00661/64be86eaa29fa71f24b00b3e_OCR_HighPerformer_HighPerformer.svg"
                width={"65px"}
                alt="badge"
              />
              <div className="achievements-content">
                <span>Ranked as High Performer on G2 (4.75 of 5)</span>
                <img
                  src="https://assets-global.website-files.com/64be86eaa29fa71f24b00661/64be86eaa29fa71f24b00b45_4.75%20stars.svg"
                  width={"140px"}
                  alt="stars"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="padding-inline-100 bg-default">
          <Carousel />
        </section>
        <section className="padding-inline-100">
          <h2 className="font-bold heading-2 text-center">
            <span>Trusted by the world’s biggest </span>
            <span className="text-secondary">data-driven businesses</span>
          </h2>
          <div className="clients-logo">
            {clients.map((company, index) => {
              return (
                <div key={index} className="text-center">
                  <img src={company.logo} alt={company.name} />
                </div>
              );
            })}
          </div>
        </section>
        <section className="text-white bg-primary lead-gen-section padding-inline-100 align-items-center">
          <div className="lead-gen-left text-left">
            <div className="font-bold heading-2 lead-gen-heading">
              Ready to automate your data extraction?
              <br /> Let's talk.
            </div>
            <div className="lead-gen-subheading">
              Docsumo's intelligent document processing enables you to extract
              data easily, efficiently, and accurately. ‍Fill up the form to
              speak with an automation expert.
            </div>
            <img
              src="https://assets-global.website-files.com/64be86eaa29fa71f24b00661/64be86eaa29fa71f24b00a38_g2%20capterra%20image.webp"
              alt="rating"
              width="100%"
            />
          </div>
          <div className="w-100">
            <form className="lead-gen-form" onSubmit={handleSubmit}>
              <InputField
                label={"Full Name"}
                name="full_name"
                inputValue={details?.full_name?.value}
                handleChange={handleChange}
                className={"mb-18px"}
                error={details?.full_name?.error}
                validateField={validateField}
              />
              <InputField
                label={"Work Email"}
                type="email"
                name="work_email"
                inputValue={details?.work_email?.value}
                handleChange={handleChange}
                className={"mb-18px"}
                error={details?.work_email?.error}
                validateField={validateField}
              />
              <InputField
                label={"Phone Number"}
                type="number"
                name="phone_number"
                inputValue={details?.phone_number?.value}
                handleChange={handleChange}
                className={"mb-18px"}
                error={details?.phone_number?.error}
                validateField={validateField}
              />
              <InputField
                label={"Comapany Name"}
                name="company_name"
                inputValue={details?.company_name?.value}
                handleChange={handleChange}
                className={"mb-18px"}
                error={details?.company_name?.error}
                validateField={validateField}
              />
              <InputField
                label={"Job Title"}
                name="job_title"
                inputValue={details?.job_title?.value}
                handleChange={handleChange}
                className={"mb-18px"}
                error={details?.job_title?.error}
                validateField={validateField}
              />
              <InputField
                label={"Documents processed/month"}
                name="no_of_docs"
                type="number"
                inputValue={details?.no_of_docs?.value}
                handleChange={handleChange}
                className={"mb-18px"}
                error={details?.no_of_docs?.error}
                validateField={validateField}
              />
              <button className="btn bg-secondary text-white font-bold schedule-demo-button">
                Schedule Demo
              </button>
            </form>
          </div>
        </section>
      </main>
    </>
  );
};

export default HomePage;
