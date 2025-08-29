import React, { useState } from 'react';
import { Collapse, Container, Row, Col, Button, Card } from 'react-bootstrap';
import workimg1 from '../assets/images/work-with-us.png';
import workimg2 from '../assets/images/work-with-us-2.png';
import workimg3 from '../assets/images/work-with-us-3.png';

const ImpactInternship = () => {
    const [open, setOpen] = useState(false); // Collapse will be closed by default

    return (
        <section className="py-4">
            <Container>
  <div
  className="p-2 d-flex px-md-5 px-4 justify-content-between align-items-center mb-3"
  style={{
    borderTop: '6px solid #f97316',
    cursor: 'pointer',
    borderRadius: '20px',
    background: '#FFF',
    boxShadow:
      '-2px -2px 8.4px 0 rgba(28, 76, 135, 0.12), 6px 6px 13.1px 0 rgba(28, 76, 135, 0.12)',
  }}
  onClick={() => setOpen(!open)}
>
  <h3
    className="mb-0 heading-serif text-orange-600 fs-3"
    style={{ color: '#f97316' }}
  >
    Work with us
  </h3>

  <div
    className={`fs-3 text-orange-500 ${open ? 'rotate-180' : ''}`}
    style={{ transition: 'transform 0.3s' }}
  >
    <span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="20"
        viewBox="0 0 40 20"
        fill="none"
      >
        <g clipPath="url(#clip0_434_320)">
          {/* Default Down Arrow ↓ */}
          <path
            d="M8.71017 3.33333L6.66699 5.31633L17.8023 16.1173C17.9807 16.2914 18.1929 16.4296 18.4266 16.5238C18.6603 16.6181 18.911 16.6667 19.1641 16.6667C19.4172 16.6667 19.6679 16.6181 19.9016 16.5238C20.1353 16.4296 20.3475 16.2914 20.5259 16.1173L31.667 5.31633L29.6238 3.3352L19.167 13.4726L8.71017 3.33333Z"
            fill="#FF611F"
            stroke="#FF611F"
            strokeWidth="0.6"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_434_320">
            <rect
              width="20"
              height="40"
              fill="white"
              transform="translate(0 20) rotate(-90)"
            />
          </clipPath>
        </defs>
      </svg>
    </span>
  </div>
</div>
       {/* Collapsible Content */}
                <Collapse in={open}>
                    <div>
                        <Card
                            className=" p-3 px-md-5  px-3 impactful"
                            style={{
                                borderRadius: '20px',
                                alignSelf: 'strech',
                                background: '#FFF',
                                boxShadow: '-2px -1px 13.2px 0 rgba(14, 38, 75, 0.16), 4px 4px 4px 0 rgba(18, 48, 94, 0.10)'
                            }}
                        >
                            <h2 className="heading-serif ">Impact Internship</h2>
                            <p className="mt-2 text-muted">
                                The <strong>Impact Internship</strong> offers a deep dive into the world of parliamentary work and policymaking in India.
                                Designed for <strong>students and recent graduates</strong>, this programme places you at the
                                <strong> centre of real-time legislative work</strong> — supporting Members of Parliament through
                                <strong> research, analysis, drafting</strong>, and <strong>monitoring</strong> of key policy issues.
                            </p>

                            <p className="text-muted mb-2">
                                Interns work on <strong>live parliamentary interventions</strong>: zero hour submissions, questions,
                                private member’s bills, speeches, policy notes, and more. The internship is fast-paced, rigorous, and ideal
                                for those considering careers in public policy, law, development, or governance.
                            </p>

                            {/* What You'll Get Section */}
                            <Card className="p-3 my-3" style={{ borderRadius: '17px', background: '#EBF5FF' }}>
                                <h5 className="fw-bold mb-4 text-dark"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                                    <path d="M22.3878 5.1538L17.5245 5.73974C17.3634 5.75927 17.295 5.95703 17.4098 6.07177L18.8575 7.51953L13.3399 13.0371L10.8546 10.5542C10.7008 10.4004 10.4542 10.4028 10.3028 10.5542L2.44883 18.4106C2.41248 18.4473 2.39209 18.4969 2.39209 18.5486C2.39209 18.6002 2.41248 18.6498 2.44883 18.6865L3.54746 19.79C3.62314 19.8657 3.74766 19.8657 3.82334 19.79L10.5787 13.0371L13.0616 15.52C13.2154 15.6714 13.462 15.6714 13.6134 15.52L20.2394 8.89892L21.6871 10.3467C21.7131 10.3725 21.7457 10.3905 21.7814 10.3987C21.8171 10.4068 21.8543 10.4048 21.8889 10.3929C21.9235 10.3809 21.9541 10.3595 21.9771 10.3311C22.0001 10.3026 22.0147 10.2683 22.0191 10.2319L22.6051 5.36865C22.6222 5.24414 22.5147 5.13671 22.3878 5.1538Z" fill="#FF611F" />
                                </svg> &nbsp; What You’ll Get:</h5>
                                <Row className="g-4">
                                    <Col md={4}>
                                        <div className=" align-items-start">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="31" height="30" viewBox="0 0 31 30" fill="none">
                                                <path d="M18 2.5H8C6.625 2.5 5.5 3.625 5.5 5V25C5.5 26.375 6.625 27.5 8 27.5H23C24.375 27.5 25.5 26.375 25.5 25V10L18 2.5ZM23 25H8V5H16.75V11.25H23V25ZM11.75 16.25V23.75H9.25V16.25H11.75ZM19.25 18.75V23.75H21.75V18.75H19.25ZM14.25 13.75V23.75H16.75V13.75H14.25Z" fill="#FF611F" />
                                            </svg>
                                            <span> &nbsp; Hands-on policy research</span>
                                        </div>
                                    </Col>
                                    <Col md={4}>
                                        <div className=" align-items-start">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="31" height="30" viewBox="0 0 31 30" fill="none">
                                                <g clip-path="url(#clip0_291_346)">
                                                    <path d="M19.6665 21.6667C19.6665 21.8877 19.5787 22.0996 19.4224 22.2559C19.2661 22.4122 19.0542 22.5 18.8332 22.5H7.1665C6.98317 22.5 6.80817 22.6667 6.65817 22.775L3.83317 25V11.6667C3.83317 11.4456 3.92097 11.2337 4.07725 11.0774C4.23353 10.9211 4.44549 10.8333 4.6665 10.8333H7.88317V9.16666H4.6665C4.00346 9.16666 3.36758 9.43005 2.89874 9.89889C2.4299 10.3677 2.1665 11.0036 2.1665 11.6667V26.6667C2.16774 26.8214 2.21206 26.9728 2.29448 27.1038C2.37691 27.2348 2.49418 27.3402 2.63317 27.4083C2.76707 27.4692 2.9147 27.4936 3.06107 27.4789C3.20743 27.4643 3.34731 27.4112 3.4665 27.325L7.75817 24.1667H18.9582C19.274 24.176 19.5884 24.1204 19.8819 24.0033C20.1754 23.8862 20.4417 23.7101 20.6643 23.4859C20.887 23.2616 21.0612 22.9941 21.1763 22.6998C21.2913 22.4055 21.3447 22.0908 21.3332 21.775V20.8333H19.6665V21.6667Z" fill="#FF611F" />
                                                    <path d="M26.3332 3.33334H12.1665C11.5035 3.33334 10.8676 3.59674 10.3987 4.06558C9.9299 4.53442 9.6665 5.1703 9.6665 5.83334V15.8333C9.6665 16.4964 9.9299 17.1323 10.3987 17.6011C10.8676 18.07 11.5035 18.3333 12.1665 18.3333H23.4582L27.4415 21.425C27.5599 21.5126 27.6994 21.5672 27.8458 21.5833C27.9922 21.5994 28.1402 21.5764 28.2748 21.5167C28.4166 21.4491 28.5365 21.3429 28.6205 21.2102C28.7046 21.0775 28.7494 20.9237 28.7498 20.7667V5.83334C28.7502 5.18449 28.4983 4.56092 28.0473 4.0944C27.5963 3.62788 26.9817 3.35497 26.3332 3.33334ZM27.1665 19.1167L24.2498 16.8417C24.1044 16.7288 23.9256 16.6672 23.7415 16.6667H12.1665C11.9455 16.6667 11.7335 16.5789 11.5772 16.4226C11.421 16.2663 11.3332 16.0544 11.3332 15.8333V5.83334C11.3332 5.61233 11.421 5.40037 11.5772 5.24409C11.7335 5.08781 11.9455 5.00001 12.1665 5.00001H26.3332C26.5559 5.02023 26.7636 5.12119 26.9171 5.28389C27.0706 5.44659 27.1593 5.65979 27.1665 5.88334V19.1167Z" fill="#FF611F" />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_291_346">
                                                        <rect width="30" height="30" fill="white" transform="translate(0.5)" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                            <span> &nbsp; Direct engagement with MPs</span>
                                        </div>
                                    </Col>
                                    <Col md={4}>
                                        <span className="fw-semibold"> &nbsp; Applications accepted year-round</span>
                                    </Col>
                                    <Col md={4}>
                                        <div className=" align-items-start">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="31" height="30" viewBox="0 0 31 30" fill="none">
                                                <g clip-path="url(#clip0_291_354)">
                                                    <path d="M25.5 15V7.18625C25.5001 7.08758 25.4807 6.98987 25.4429 6.8987C25.4052 6.80754 25.3498 6.72473 25.28 6.655L21.345 2.72C21.2045 2.57931 21.0138 2.50018 20.815 2.5H6.25C6.05109 2.5 5.86032 2.57902 5.71967 2.71967C5.57902 2.86032 5.5 3.05109 5.5 3.25V26.75C5.5 26.9489 5.57902 27.1397 5.71967 27.2803C5.86032 27.421 6.05109 27.5 6.25 27.5H16.75M10.5 12.5H20.5M10.5 7.5H15.5M10.5 17.5H14.25" stroke="#FF611F" stroke-width="1.875" stroke-linecap="round" stroke-linejoin="round" />
                                                    <path d="M20.5 2.5V6.75C20.5 6.94891 20.579 7.13968 20.7197 7.28033C20.8603 7.42098 21.0511 7.5 21.25 7.5H25.5M25.49 18.9062L28.685 19.7175C29.0175 19.8025 29.2513 20.105 29.2413 20.4475C29.0263 27.645 24.875 28.75 24.875 28.75C24.875 28.75 20.7237 27.645 20.5087 20.4475C20.5053 20.2809 20.5585 20.118 20.6595 19.9854C20.7605 19.8529 20.9034 19.7584 21.065 19.7175L24.26 18.9062C24.6637 18.8037 25.0863 18.8037 25.49 18.9062Z" stroke="#FF611F" stroke-width="1.875" stroke-linecap="round" stroke-linejoin="round" />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_291_354">
                                                        <rect width="30" height="30" fill="white" transform="translate(0.5)" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                            <span>  &nbsp; Legislative drafting experience</span>
                                        </div>
                                    </Col>
                                    <Col md={4}>
                                        <div className=" align-items-start">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="31" height="30" viewBox="0 0 31 30" fill="none">
                                                <path d="M16.8375 13.0125C17.5968 11.9516 18.0051 10.6796 18.0051 9.37498C18.0051 8.07034 17.5968 6.79841 16.8375 5.73749C17.5485 5.25315 18.3897 4.99598 19.25 4.99998C20.4103 4.99998 21.5231 5.46092 22.3436 6.28139C23.1641 7.10186 23.625 8.21466 23.625 9.37498C23.625 10.5353 23.1641 11.6481 22.3436 12.4686C21.5231 13.289 20.4103 13.75 19.25 13.75C18.3897 13.754 17.5485 13.4968 16.8375 13.0125ZM7.375 9.37498C7.375 8.50969 7.63159 7.66383 8.11232 6.94437C8.59305 6.2249 9.27633 5.66415 10.0758 5.33301C10.8752 5.00188 11.7549 4.91524 12.6035 5.08405C13.4522 5.25286 14.2317 5.66954 14.8436 6.28139C15.4554 6.89325 15.8721 7.6728 16.0409 8.52146C16.2097 9.37013 16.1231 10.2498 15.792 11.0492C15.4608 11.8487 14.9001 12.5319 14.1806 13.0127C13.4612 13.4934 12.6153 13.75 11.75 13.75C10.5897 13.75 9.47688 13.289 8.65641 12.4686C7.83594 11.6481 7.375 10.5353 7.375 9.37498ZM9.875 9.37498C9.875 9.74582 9.98497 10.1083 10.191 10.4167C10.397 10.725 10.6899 10.9653 11.0325 11.1073C11.3751 11.2492 11.7521 11.2863 12.1158 11.214C12.4795 11.1416 12.8136 10.963 13.0758 10.7008C13.338 10.4386 13.5166 10.1045 13.589 9.74078C13.6613 9.37706 13.6242 9.00006 13.4823 8.65745C13.3404 8.31484 13.1 8.02201 12.7917 7.81598C12.4834 7.60995 12.1208 7.49998 11.75 7.49998C11.2527 7.49998 10.7758 7.69753 10.4242 8.04916C10.0725 8.40079 9.875 8.8777 9.875 9.37498ZM20.5 21.25V23.75H3V21.25C3 21.25 3 16.25 11.75 16.25C20.5 16.25 20.5 21.25 20.5 21.25ZM18 21.25C17.825 20.275 16.3375 18.75 11.75 18.75C7.1625 18.75 5.5875 20.3875 5.5 21.25M20.4375 16.25C21.2036 16.8459 21.83 17.6023 22.2727 18.4661C22.7154 19.3298 22.9636 20.2801 23 21.25V23.75H28V21.25C28 21.25 28 16.7125 20.425 16.25H20.4375Z" fill="#FF611F" />
                                            </svg>
                                            <span>  &nbsp; Exposure to real-time governance</span>
                                        </div>
                                    </Col>
                                    <Col md={4}>
                                        <a
                                            href="https://forms.gle/2nfEAgVVccdctuHC6"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <Button
                                                className="text-white px-4"
                                                style={{
                                                    borderRadius: "10px",
                                                    background: "#FF611F",
                                                    color: "#FFF",
                                                    fontWeight: 600,
                                                    border: 0,
                                                    fontSize: "16px",
                                                    lineHeight: "24px",
                                                    padding: "10px 20px"
                                                }}
                                            >
                                                Apply Now{" "}
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="19"
                                                    height="19"
                                                    viewBox="0 0 19 19"
                                                    fill="none"
                                                >
                                                    <path
                                                        d="M5.45937 15.1088L13.5384 7.02968M13.5384 7.02968L13.5384 13.089M13.5384 7.02968L7.47914 7.02968"
                                                        stroke="white"
                                                        strokeWidth="1.5"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                </svg>
                                            </Button>
                                        </a>


                                    </Col>
                                </Row>
                            </Card>

                            {/* Optional: Image section placeholder */}
                            <Row className="g-3 py-2">
                                <Col md={4}>

                                    <img src={workimg1} alt="mission" className="img-fluid  w-100 h-100 object-fit-cover" />
                                </Col>
                                <Col md={4}>

                                    <img src={workimg2} alt="mission" className="img-fluid w-100 h-100 object-fit-cover" />
                                </Col>
                                <Col md={4}>

                                    <img src={workimg3} alt="mission" className="img-fluid  w-100 h-100 object-fit-cover" />
                                </Col>
                            </Row>

                          
                        </Card>
                          <div class="opportunity-card mt-2 p-4 px-md-5  px-3">
                                <h2 className="heading-serif fw-normal ">Full-Time Opportunities</h2>
                                <p className="mb-1">
                                    Looking to build a career at the intersection of politics, governance, and impact?
                                </p>
                                <p className="mb-0">
                                    Politics for Impact hires <strong>full-time associates</strong> and <strong>leads</strong> across roles — from legislative research and grassroots programming to communications, design, and stakeholder engagement. We look for people who are driven by purpose, and ready to work in dynamic, high-stakes political environments.
                                </p>
                                <a href="https://in.linkedin.com/company/politicsforimpact" target="_blank" rel="noreferrer" class="find-openings">Find current openings <svg xmlns="http://www.w3.org/2000/svg" width="18" height="19" viewBox="0 0 18 19" fill="none">
                                    <path d="M5.27089 15.1087L13.35 7.02965M13.35 7.02965L13.35 13.089M13.35 7.02965L7.29066 7.02965" stroke="#FF611F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg></a>
                            </div>
                    </div>
                </Collapse>
            </Container>
        </section>
    );
};

export default ImpactInternship;
