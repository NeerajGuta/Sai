import React from "react";
import { useState } from "react";
import { Container } from "react-bootstrap";
import { MdOutlineArrowDropDownCircle } from "react-icons/md";
import Accordion from "react-bootstrap/Accordion";

const AiMultiService = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleClick1 = () => {
    setIsOpen1(!isOpen1);
  };
  const handleClick2 = () => {
    setIsOpen2(!isOpen1);
  };

  return (
    <div>
      <h2 className="all-home-head mt-4"> Ai Multi Services </h2>

      <Container className="d-flex justify-content-center ohhsgdhuf ">
        <div className="wtniego">
          <Accordion defaultActiveKey="0" className="udufgs_0">
            <div className="dfos1">
              <Accordion.Item
                eventKey="0"
                className="uyegrb_1"
                style={{ background: "#" }}
              >
                <Accordion.Header>
                  <h4 className="fw-bold mb-0 ms-2">Aadhaar Card</h4>
                </Accordion.Header>
                <Accordion.Body>
                  The Aadhaar card, issued by the Unique Identification
                  Authority of India (UIDAI), is a crucial identification
                  document for Indian residents. It serves as proof of identity
                  and residence and is essential for various government and
                  private sector services.
                </Accordion.Body>
              </Accordion.Item>
            </div>

            <div className="dfos">
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  {" "}
                  <h4 className="fw-bold mb-0 ms-2">Pan Card</h4>
                </Accordion.Header>
                <Accordion.Body>
                  A Permanent Account Number (PAN) card is a unique
                  identification card issued by the Indian government Income Tax
                  Department. It is primarily used for financial and taxation
                  purposes in India.
                </Accordion.Body>
              </Accordion.Item>
            </div>

            <div className="dfos2">
              <Accordion.Item eventKey="2">
                <Accordion.Header>
                  {" "}
                  <h4 className="fw-bold mb-0 ms-2">Votar ID</h4>
                </Accordion.Header>
                <Accordion.Body>
                  A Voter ID text typically refers to a document or
                  identification card issued by a government authority that
                  confirms an individual eligibility to vote in elections. These
                  IDs are used to establish the identity of a voter and to
                  prevent fraud in the electoral process. The specific details
                  and requirements for obtaining a Voter ID can vary from one
                  country to another, as election laws and regulations differ.
                </Accordion.Body>
              </Accordion.Item>
            </div>

            <div className="dfos3">
              <Accordion.Item eventKey="3">
                <Accordion.Header>
                  {" "}
                  <h4 className="fw-bold mb-0 ms-2">Ration Card</h4>
                </Accordion.Header>
                <Accordion.Body>
                  A ration card is an official document issued by the government
                  to households in many countries, including India, to enable
                  them to purchase essential food and non-food items at
                  subsidized rates. The text on a ration card typically contains
                  important information about the cardholder and their family,
                  as well as details about the type and quantity of commodities
                  they are eligible to receive under the government public
                  distribution system (PDS).
                </Accordion.Body>
              </Accordion.Item>
            </div>

            <div className="dfos4">
              <Accordion.Item eventKey="4">
                <Accordion.Header>
                  {" "}
                  <h4 className="fw-bold mb-0 ms-2">
                    Cast & Income (Certificate)
                  </h4>
                </Accordion.Header>
                <Accordion.Body>
                  <span className="fw-bold">1. Caste Certificate:</span>
                  <ul>
                    <li>
                      A caste certificate, also known as a community certificate
                      or a social category certificate, is a document that
                      certifies a person&#39;s specific caste or community in
                      India.
                    </li>
                    <li>
                      This certificate is typically used for the following
                      purposes:
                      <ul>
                        <li>
                          Reservation in educational institutions and government
                          jobs.
                        </li>
                        <li>
                          Access to certain government welfare schemes and
                          benefits meant for specific castes or communities.
                        </li>
                      </ul>
                    </li>
                    <li>
                      To establish eligibility for specific quotas or
                      reservations in various government and private sector
                      services.
                    </li>
                  </ul>

                  <span className="fw-bold">2. Income Certificate:</span>

                  <ul>
                    <li>
                      An income certificate is a document that certifies a
                      person or family income level, usually for a specific
                      financial year.
                    </li>

                    <li>
                      Income certificates are issued by the local revenue
                      authorities or the tehsil office in India.
                    </li>
                    <li>
                      The certificate provides information about the individual
                      or family total income from all sources during a
                      particular financial year and is used to verify whether
                      the applicant falls within the income bracket specified
                      for a particular scheme.
                    </li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
            </div>

            <div className="dfos5">
              <Accordion.Item eventKey="5">
                <Accordion.Header>
                  {" "}
                  <h4 className="fw-bold mb-0 ms-2">Buspass</h4>
                </Accordion.Header>
                <Accordion.Body>
                  <p className="mb-2">
                    A bus pass, also known as a transit pass or bus ticket, is a
                    card or document that allows an individual to use public
                    transportation services, such as buses, trams, subways, and
                    sometimes even trains, within a specific area or for a
                    certain period of time. Bus passes are typically issued by
                    public transportation authorities or agencies and are
                    designed to make commuting more convenient and affordable
                    for regular users of public transportation.
                  </p>

                  <p className="mb-2 fw-bold">
                    {" "}
                    Here are some key points about bus passes:
                  </p>
                  <p>
                    Types of Bus Passes: Bus passes come in various forms,
                    including daily passes, weekly passes, monthly passes, and
                    annual passes. The type of pass you choose depends on your
                    commuting needs and the availability of options in your
                    area.
                  </p>
                </Accordion.Body>
              </Accordion.Item>
            </div>

            <div className="dfos6">
              <Accordion.Item eventKey="6">
                <Accordion.Header>
                  {" "}
                  <h4 className="fw-bold mb-0 ms-2">Scholarship</h4>
                </Accordion.Header>
                <Accordion.Body>
                  Applying for a scholarship is an important step in securing
                  financial support for your education. Scholarships are awarded
                  based on various criteria, such as academic achievements,
                  community involvement, leadership abilities, or specific
                  talents. To increase your chances of receiving a scholarship,
                  it essential
                </Accordion.Body>
              </Accordion.Item>
            </div>

            {/* <div className='dfos7'>
                            <Accordion.Item eventKey="7">
                                <Accordion.Header> <h4 className='fw-bold mb-0 ms-2'>Admission Open</h4></Accordion.Header>
                                <Accordion.Body>
                                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat saepe numquam harum incidunt fugit, sapiente quo ducimus necessitatibus voluptatem id nam enim delectus placeat voluptas consectetur facere nihil modi est.
                                </Accordion.Body>
                            </Accordion.Item>
                        </div> */}

            <div className="dfos8">
              <Accordion.Item eventKey="8">
                <Accordion.Header>
                  {" "}
                  <h4 className="fw-bold mb-0 ms-2">Bank Account Open</h4>
                </Accordion.Header>
                <Accordion.Body>
                  {/* Certainly, I can provide you with a sample text for opening a
                  bank account. Keep in mind that the specific requirements and
                  procedures may vary depending on the bank and your location.
                  It essential to contact the bank directly or visit their
                  website for the most up-to- date information and to ensure you
                  have all the necessary documentation. Here a general template
                  for opening a personal bank account: */}
                  <p>
                    Opening a bank account is a straightforward process that
                    allows you to securely store and manage your money. We are
                    here to help you to open new bank account.
                  </p>
                  <p>
                    {" "}
                    1. We will Research different banks to find one that suits
                    your needs. Consider factors like branch locations, ATM
                    access, account fees, and interest rates.
                  </p>
                  <ul>
                    <li>
                      <b>Savings Account : </b> For saving money and earning
                      interest.
                    </li>
                    <li>
                      <b>Business Account : </b> If you re opening an account
                      for your business.
                    </li>
                  </ul>
                  <p>
                    2. Identification: You&#39;ll typically need to provide
                    identification documents, such as:
                  </p>
                  <ul>
                    <li>
                      <b>Government-issued ID :</b> Passport, driver&#39;s
                      license, or state ID.
                    </li>
                    <li>
                      <b>Social Security Number (SSN) </b> or Taxpayer
                      Identification Number (TIN).
                    </li>
                    <li>
                      <b>Proof of Address : </b> A utility bill or lease
                      agreement in your name.
                    </li>
                  </ul>
                  <p>
                    3. <b>Initial Deposit:</b> Depending on the bank and account
                    type, you may need to make an initial deposit. This can vary
                    widely, from a small amount to a larger sum, so check the
                    bank&#39;s requirements.
                  </p>
                </Accordion.Body>
              </Accordion.Item>
            </div>

            <div className="dfos9">
              <Accordion.Item eventKey="9">
                <Accordion.Header>
                  {" "}
                  <h4 className="fw-bold mb-0 ms-2">Labour Card</h4>
                </Accordion.Header>
                <Accordion.Body>
                  A Labour Card typically refers to an identification card or
                  document issued by government authorities to registered
                  laborers or workers. The specific information and purpose of a
                  Labour Card can vary from one country to another, as well as
                  from one region or state to another. Here some general
                  information that might be found on a Labour Card.
                </Accordion.Body>
              </Accordion.Item>
            </div>

            <div className="dfos10">
              <Accordion.Item eventKey="10">
                <Accordion.Header>
                  {" "}
                  <h4 className="fw-bold mb-0 ms-2">Driving Liecense</h4>
                </Accordion.Header>
                <Accordion.Body>
                  A driving license, also known as a driver&#39;s license, is an
                  official document issued by a government authority that
                  permits an individual to operate a motor vehicle on public
                  roads. The text on a driving license typically contains
                  important information about the license holder and their
                  driving privileges. The specific details included on a driving
                  license can vary from one country to another, but here are
                  some common elements you might find on a typical driving
                  license.
                </Accordion.Body>
              </Accordion.Item>
            </div>

            <div className="dfos11">
              <Accordion.Item eventKey="11">
                <Accordion.Header>
                  {" "}
                  <h4 className="fw-bold mb-0 ms-2">All Bil Payment </h4>
                </Accordion.Header>
                <Accordion.Body>
                  {/* It seems like you looking for information about bill payment text. Bill payment text typically
                                    refers to the messages or notifications you receive when making payments for various bills,
                                    such as utilities, rent, credit card bills, or any other regular expenses. These texts can serve
                                    different purposes and may include various pieces of information. Here what you might find
                                    in a bill payment text. */}
                  Now make instant bill payments or recharges instantly with our
                  bill payment service. it takes seconds to do your mobile
                  recharge, data plan or DTH recharges! we cover all the top
                  operators in India like Airtel, Jio, MTNL, Vi, Dish TV, Tata
                  Sky &amp; more. Just not that, but you can also pay all your
                  utility bills like electricity bills, gas, water, insurance
                  premium, cable, Credit card etc, from anywhere, anytime. Make
                  instant transactions with us today.
                </Accordion.Body>
              </Accordion.Item>
            </div>

            <div className="dfos12">
              <Accordion.Item eventKey="12">
                <Accordion.Header>
                  {" "}
                  <h4 className="fw-bold mb-0 ms-2">Insurance </h4>
                </Accordion.Header>
                <Accordion.Body>
                  <ol>
                    <li>
                      Insurance premiums represent the cost of purchasing an
                      insurance policy. The amount paid can vary widely
                      depending on the type of insurance (e.g., auto, health,
                      life, home, or business insurance), the coverage limits,
                      the deductible, the policyholder age, location, and
                      various other factors.
                    </li>
                    <li>
                      Frequency of Payment: Insurance premiums can be paid in
                      various ways, such as monthly, quarterly, semi-annually,
                      or annually, depending on the insurer policies and the
                      preferences of the policyholder.
                    </li>
                  </ol>
                </Accordion.Body>
              </Accordion.Item>
            </div>

            {/* <div className='dfos13'>
                            <Accordion.Item eventKey="13">
                                <Accordion.Header> <h4 className='fw-bold mb-0 ms-2'>Passport </h4></Accordion.Header>
                                <Accordion.Body>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                    culpa qui officia deserunt mollit anim id est laborum.
                                </Accordion.Body>
                            </Accordion.Item>
                        </div> */}

            <div className="dfos14">
              <Accordion.Item eventKey="14">
                <Accordion.Header>
                  {" "}
                  <h4 className="fw-bold mb-0 ms-2">Goverment Loan </h4>
                </Accordion.Header>
                <Accordion.Body>
                  Micro, Small, and Medium Enterprises (MSMEs) are the growth
                  drivers of the Indian economy. To sustain their growth, the
                  Government of India provides several subsidies and various
                  government schemes for businesses. These help SMEs overcome
                  liquidity bottlenecks, conduct smooth operations and be
                  competitive. As a business owner, you can opt for a government
                  subsidy loan for business as compared to other private
                  lenders. There are various benefits that a government subsidy
                  loan for business offers such as lower interest rates, no
                  collateral requirements, etc. On the other hand, private
                  lenders provide other benefits such as personalized service,
                  transparent process, best interest rates, periodic offers,
                  etc. Hence, it makes sense to compare all products before
                  deciding the final one.
                </Accordion.Body>
              </Accordion.Item>
            </div>

            <div className="dfos15">
              <Accordion.Item eventKey="15">
                <Accordion.Header>
                  {" "}
                  <h4 className="fw-bold mb-0 ms-2">All Ticket Booking </h4>
                </Accordion.Header>
                <Accordion.Body>
                  Booking a ticket, whether it for a flight, train, bus,
                  concert, or any other event or mode of transportation,
                  typically involves providing specific information in a text
                  format. The details required for booking a ticket can vary
                  depending on the type of ticket and the service provider.
                </Accordion.Body>
              </Accordion.Item>
            </div>
          </Accordion>
        </div>

        {/* <div className='udufgs_0' >
                    <div className='uyegrb_1'>
                        <div className='d-flex justify-content-between align-items-center' onClick={handleClick}>
                            <h4 className='fw-bold mb-0 ms-2'>Aadhaar Card</h4>
                            <p className='hjsdfgh' ><MdOutlineArrowDropDownCircle /></p>
                        </div>

                        {isOpen && (
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga deserunt inventore quaerat aspernatur debitis, in rerum aut laborum repellendus similique temporibus voluptates, expedita nesciunt facere consectetur. Repellendus nulla laboriosam inventore?</p>
                        )}
                    </div>

                    <div className='uyegrb_1' style={{ backgroundColor: 'rgb(45 199 18)' }}>
                        <div className='d-flex justify-content-between align-items-center' onClick={handleClick1}>
                            <h4 className='fw-bold mb-0 ms-2'>Pan Card</h4>
                            <p className='hjsdfgh' ><MdOutlineArrowDropDownCircle /></p>
                        </div>

                        {isOpen1 && (
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga deserunt inventore quaerat aspernatur debitis, in rerum aut laborum repellendus similique temporibus voluptates, expedita nesciunt facere consectetur. Repellendus nulla laboriosam inventore?</p>
                        )}
                    </div>

                    <div className='uyegrb_1' style={{ backgroundColor: 'rgb(13 18 177 / 88%)' }}>
                        <div className='d-flex justify-content-between align-items-center' onClick={handleClick2}>
                            <h4 className='fw-bold mb-0 ms-2'>Pan Card</h4>
                            <p className='hjsdfgh' ><MdOutlineArrowDropDownCircle /></p>
                        </div>

                        {isOpen2 && (
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga deserunt inventore quaerat aspernatur debitis, in rerum aut laborum repellendus similique temporibus voluptates, expedita nesciunt facere consectetur. Repellendus nulla laboriosam inventore?</p>
                        )}
                    </div>


                </div> */}
      </Container>
    </div>
  );
};

export default AiMultiService;
