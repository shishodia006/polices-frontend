import React, { useState } from "react";
import { OverlayTrigger, Tooltip, Modal } from "react-bootstrap";
import "./MapWithMarkers.css";
import mapimg from "../assets/images/india-map.png";

// Images (keeping your imports here)
import delhiimg1 from "../assets/images/yateen.png";
import delhiimg2 from "../assets/images/Divniti.png";
import delhiimg3 from "../assets/images/shrayash.png";
import delhiimg4 from "../assets/images/zainaib.png";
import delhiimg5 from "../assets/images/saymyta.png";
import delhiimg6 from "../assets/images/sharath.png";
import andhraimg7 from "../assets/images/srikant.png";
import andhraimg8 from "../assets/images/Anil-kumar.png";
import andhraimg9 from "../assets/images/kiran.png";
import andhraimg10 from "../assets/images/prakash.png";
import heyimg11 from "../assets/images/chit.png";
import heyimg12 from "../assets/images/sri.png";
import heyimg13 from "../assets/images/karee.png";
import heyimg14 from "../assets/images/ajay.png";
import heyimg15 from "../assets/images/susheel.jpg";
import heyimg16 from "../assets/images/santosh.jpg";
import banimg15 from "../assets/images/malat.png";
import banimg16 from "../assets/images/nagraj.png";
import banimg17 from "../assets/images/kr.png";
import delhiimg21 from "../assets/images/praniva.png";
import delhiimg22 from "../assets/images/shiwang.png";
import delhiimg23 from "../assets/images/sunny.png";
import delhiimg24 from "../assets/images/rohit.png";
import delhiimg25 from "../assets/images/kapil.png";
import andhraimg26 from "../assets/images/ghv.png";
import andhraimg27 from "../assets/images/korada.png";
import andhraimg28 from "../assets/images/sariyam.png";
import andhraimg29 from "../assets/images/pidthala.png";
import andhraimg30 from "../assets/images/bharath.png";
import andhraimg31 from "../assets/images/adusim.png";

// Regions data
const regions = [
    {
        id: "delhi",
        name: "Delhi",
        color: "#FF611F",
        people: [
            { name: "Yateen Deepak", role: "Senior Research Associate", additionalInfo: "An alumnus of Christ University and a former Smart Cities Fellow at the Ministry of Housing and Urban Affairs, Yateen has worked with several MPs. He brings expertise in legislative strategy, urban policy, and capacity-building to strengthen governance systems.", img: delhiimg1 },
            { name: "Divniti Kothari", role: "Senior Research Associate", additionalInfo: "A Political Science graduate from Delhi University, Diviniti has worked with CRY, Samhita Social Ventures, and multiple MPs. She brings a strong foundation in social impact, research, and coalition-building to drive strategic, cross-sectoral advocacy initiatives.", img: delhiimg2 },
            { name: "Shreyas Shetty", role: "Senior Research Associate", additionalInfo: "A graduate of ILS Law College, Pune, and a former LAMP Fellow, Shreyas has experience in litigation and parliamentary research. He brings a legal-policy lens to institutional reform, crafting interventions that enhance accountability and democratic functioning.", img: delhiimg3 },
            { name: "Zainab Akhtar", role: "Junior Research Associate", additionalInfo: "Zainab holds a Master’s in Politics and International Studies from JNU and has worked with CCS and Brics Feminist Watch. She brings a critical lens rooted in feminist and decolonial thought, with a focus on climate, education, and multilateral governance.", img: delhiimg4 },
            { name: "Samayeta Bal", role: "Junior Research Associate", additionalInfo: "Samayeta is an advocate with a passion for public policy and international affairs. With a background in law and a commitment to interdisciplinary thinking, she brings sharp legal insight and a curiosity for global political systems.", img: delhiimg5 },
            { name: "Sharath Potturu", role: "Research Fellow", additionalInfo: "Sharath is an Economics graduate from Hindu College and trained in data analytics at IIT Madras. He brings a data-driven approach to public policy, with interests spanning technology, finance, and state-level development.", img: delhiimg6 },
            { name: "Pravina Srivastava", role: "Senior Communications Strategist", additionalInfo: "Pravina is a Senior Communications Strategist with 5+ years’ experience in journalism and podcasting. She holds a Master’s in Journalism (PR) and is pursuing another in Migration & Diaspora Studies. An Assam University alumna with a BA in Political Science and a diploma in Creative Writing, she specializes in people-centric, cross-platform storytelling.", img: delhiimg21 },
            { name: "Shiwang Singh", role: "Senior Communications Strategist", additionalInfo: "An alumnus of the Kautilya School of Public Policy, Shiwang specializes in policy communications, stakeholder engagement, and content creation. Currently with the Ministry of Civil Aviation, he drives social and media outreach to build narratives that enhance citizen engagement and public policy conversations.", img: delhiimg22 },
            { name: "Sunny Singh Kushwah", role: "Photographer", additionalInfo: "Sunny is a skilled photographer and videographer, currently serving as the Official Photographer in the office of the Hon’ble Civil Aviation Minister, Shri Ram Mohan Naidu Ji. With a sharp eye for composition and a dedication to authenticity, he captures key moments in politics, public service, and events, translating them into powerful visual stories.", img: delhiimg23 },
            { name: "Rohit Bajaj", role: "Video Editor", additionalInfo: "Rohit is a creative and driven video editor with strong storytelling skills and a passion for impactful visual content. With a keen eye for detail and a commitment to innovation, he brings expertise in crafting engaging multimedia narratives that amplify organisational messaging and capture audience attention.", img: delhiimg24 },
            { name: "Kapil Khatri", role: "Special Advisor", additionalInfo: "Special Advisor to Union Cabinet Minister Sh. Rammohan Naidu.	An alumnus of IIIT Delhi and a former LAMP Fellow, he brings a unique blend of technical expertise and policy acumen. His experience spans research for a parliamentary party, leadership of community development projects in a former Union Cabinet Minister’s constituency, and a tenure at the DRDO. ", img: delhiimg25 },
        ]
    },
    {
        id: "hyderabad",
        name: "Hyderabad",
        color: "#FF611F",
        people: [
            { name: "Chitikela Demudu Naidu", role: "Video Editor", additionalInfo: "An alumnus of Christ University and a former Smart Cities Fellow at the Ministry of Housing and Urban Affairs, Yateen has worked with several MPs. He brings expertise in legislative strategy, urban policy, and capacity-building to strengthen governance systems.", img: heyimg11 },
            { name: "Srinivas", role: "Content Writer", additionalInfo: "Srinivas is a seasoned writer who specialises in political and social communication. With a strong grasp of public affairs and a passion for storytelling, he crafts compelling narratives that inform, engage, and inspire action.", img: heyimg12 },
            { name: "Karre Venkatesh", role: "Senior Graphic Designer", additionalInfo: "Venkatesh is a creative force driven by a passion for visual storytelling. With deep expertise in branding and digital design, he blends creativity and precision to craft visuals that leave a lasting impression. ", img: heyimg13 },
            { name: "Ajay Kumar Ankam", role: "Video Editor", additionalInfo: "Ajay is focused on creating impactful visual content for political and digital platforms. With strong technical skills and a keen sense of narrative, he brings stories to life through compelling edits that engage and inform. ", img: heyimg14 },
            { name: "G Susheel Kumar", role: "Team Lead", additionalInfo: "Susheel leads governance initiatives at Politics for Impact, supporting state ministers and MLAs. He specializes in political strategy, constituency management, and grassroots coordination, ensuring seamless alignment between on-ground activities and leadership goals.", img: heyimg15 },
            { name: "Salla Santhosh", role: "Video Editor", additionalInfo: "Santhosh is a video editor with 5 years of experience in transforming raw footage into compelling visual stories. . His work spans social media content, promotional films, and music videos, blending creativity with technical precision.", img: heyimg16 }

        ]
    },
    {
        id: "andhra",
        name: "Andhra Pradesh",
        color: "#FF611F",
        people: [
            { name: "Srikanth Potharaju", role: "Manager, Design Team", additionalInfo: "An alumnus of JNAFAU, Hyderabad, Srikanth began his career at Doordarshan and went on to specialise in political communication. He has led design for multiple election campaigns in Andhra Pradesh, crafting sharp, strategy-driven visuals.", img: andhraimg7 },
            { name: "Anil kumar", role: "Graphic Designer", additionalInfo: "Anil is a designer with experience across fashion, tech, and media. At Politics for Impact, he creates compelling campaign visuals, blending creativity with a strong understanding of design trends and communication.", img: andhraimg8 },
           
            { name: "Prakash Tatineni", role: "Senior Graphic & Video Editor", additionalInfo: "An IIT Guwahati alumnus, Prakash brings an entrepreneurial spirit and strong ground-level political insight. With experience in campaign strategy, branding, and multimedia production, he delivers innovative, results-driven content.", img: andhraimg10 },
            { name: "G.H.V. Prasad", role: "Governance Associate", additionalInfo: "Prasad specializes in grassroots campaigning, policy research, and digital strategy. He has supported leaders like Adireddy Vasu, Paritala Sriram, and Viresh Chandra Dev, contributing to winning campaigns and impactful public outreach.", img: andhraimg26 },
            { name: "Korada Hari Krishna", role: "Governance Associate", additionalInfo: "Hari Krishna is a political consultant and digital strategist, currently serving as Personal Secretary to Visakhapatnam MP Sribharat Mathukumilli. He focuses on narrative building, grassroots outreach, and strategic communication.", img: andhraimg27 },
            { name: "Sariyam Teja Krishna Chaithanya", role: "Senior Political Consultant", additionalInfo: "With over 7 years of experience in public policy and governance consulting, Sariyam has worked with KPMG, Swaniti Initiative, EFICOR, and DRDA Karnal. He brings expertise in rural development, government schemes, and large-scale implementation.", img: andhraimg28 },
            { name: "Pidathala Sagar", role: "Governance Associate", additionalInfo: "Based in Srikakulam, Sagar works on education, health, sports, and rural development projects. He specialises in campaign planning, policy analysis, and constituency-level coordination with a focus on problem-solving and impact delivery.", img: andhraimg29 },
            { name: "Bharath Ragalla", role: "Senior Photographer", additionalInfo: "Bharath is a visual storyteller known for capturing raw human emotion and authentic moments. His photography blends atmosphere and realism, creating powerful visuals that connect deeply with audiences.", img: andhraimg30 },
            { name: "Adusumilli Vijay Brahmesh", role: "Senior Governance Associate", additionalInfo: "Vijay Brahmesh advises Union Minister of Civil Aviation Shri Kinjarapu Rammohan Naidu and works on development initiatives in Srikakulam. He focuses on policy implementation, governance, and community-driven change.", img: andhraimg31 },

        ]
    },
    {
        id: "bengaluru",
        name: "Bangalore",
        color: "#FF611F",
        people: [
            { name: "Malathesha B K", role: "Social Media Manager", additionalInfo: "Malathesha brings hands-on experience in digital strategy, election communication, and constituency-level outreach. With a background in political operations and branding, he has worked with organisations like IPAC and Mindshare, and now focuses on managing impactful social media campaigns and narratives.", img: banimg15 },
            { name: "Nagaraj Vaidya", role: "Graphic Designer", additionalInfo: "Nagaraj is a seasoned journalist and designer with over 15 years of experience across newspapers, television, and political campaigns. He brings creative storytelling, editorial design, and visual strategy expertise, along with a passion for writing, photography, and technology.", img: banimg16 },
            { name: "K.R. Gururaj", role: "Senior Political Consultant", additionalInfo: "K.R. Gururaj brings over 20 years of experience in print and digital media, having held senior editorial roles at leading Kannada dailies such as Vijayakarnataka, Kannadaprabha, and Udayavani. A published author of six books, he now focuses on political consulting, with five years of experience in strategy, messaging, and narrative building.", img: banimg17 }
        ]
    }
];

// Markers data
const markers = [
    { id: 1, top: "26.5%", left: "44%", title: "Delhi" },
    { id: 2, top: "66%", left: "53%", title: "Hyderabad" },
    { id: 3, top: "76%", left: "52%", title: "Andhra Pradesh" },
    { id: 4, top: "78%", left: "35%", title: "Bangalore" },
];

const getRegionByMarker = (markerId) => {
    switch (markerId) {
        case 1: return regions[0];
        case 2: return regions[1];
        case 3: return regions[2];
        case 4: return regions[3];
        default: return null;
    }
};

export default function MapWithMarkers() {
    const [selectedMarker, setSelectedMarker] = useState(null);
    const selectedRegion = selectedMarker ? getRegionByMarker(selectedMarker.id) : null;
    // const [hovered, setHovered] = useState(false);
    const [hovered, setHovered] = useState(null);



    const handleClose = () => setSelectedMarker(null);

    return (
        <div className="map-container">
            {/* Background map */}
            <img src={mapimg} alt="India Map" className="map-image" />

            {/* SVG markers with tooltip */}
            {markers.map((marker) => (
                <OverlayTrigger
                    key={marker.id}
                    placement="top"
                    overlay={<Tooltip>{marker.title}</Tooltip>}
                >
                    <div
                        className="marker"
                        style={{ top: marker.top, left: marker.left }}
                        onClick={() => setSelectedMarker(marker)}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="28" viewBox="0 0 36 36" fill="none">
                            <g clipPath="url(#clip0_174_665)">
                                <g filter="url(#filter0_d_174_665)">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M17.9907 2.67676C15.1244 2.67676 12.3754 3.81541 10.3486 5.84223C8.32176 7.86905 7.18311 10.618 7.18311 13.4844C7.18311 15.9485 8.39356 18.8622 10.1595 21.9878C11.9471 25.1501 14.4112 28.7036 17.111 32.4863L17.9907 33.7183L18.8704 32.4863C21.5723 28.7036 24.0343 25.1501 25.8219 21.9878C27.5879 18.8622 28.7983 15.9485 28.7983 13.4844C28.7983 12.0651 28.5188 10.6597 27.9756 9.34847C27.4325 8.03723 26.6364 6.84581 25.6328 5.84223C24.6293 4.83865 23.4378 4.04257 22.1266 3.49944C20.8154 2.9563 19.41 2.67676 17.9907 2.67676ZM17.9907 8.08056C16.5575 8.08056 15.1831 8.64989 14.1696 9.66329C13.1562 10.6767 12.5869 12.0512 12.5869 13.4844C12.5869 14.9175 13.1562 16.292 14.1696 17.3054C15.1831 18.3188 16.5575 18.8882 17.9907 18.8882C19.4239 18.8882 20.7984 18.3188 21.8118 17.3054C22.8252 16.292 23.3945 14.9175 23.3945 13.4844C23.3945 12.0512 22.8252 10.6767 21.8118 9.66329C20.7984 8.64989 19.4239 8.08056 17.9907 8.08056Z" fill="white" />
                                </g>
                            </g>
                            <defs>
                                <filter id="filter0_d_174_665" x="-0.919508" y="-5.42586" width="39.7967" height="49.223" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                    <feOffset dx="0.988124" dy="0.988124" />
                                    <feGaussianBlur stdDeviation="4.54537" />
                                    <feComposite in2="hardAlpha" operator="out" />
                                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_174_665" />
                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_174_665" result="shape" />
                                </filter>
                                <clipPath id="clip0_174_665">
                                    <rect width="34.5843" height="34.5843" fill="white" transform="translate(0.698242 0.515381)" />
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                </OverlayTrigger>
            ))}

            {/* Modal */}
            {selectedMarker && selectedRegion && (
                <Modal show onHide={handleClose} size="lg" centered dialogClassName="custom-modal-width">
                    <Modal.Header closeButton>
                        <Modal.Title>{selectedRegion.name}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="row flex-wrap">
                            {selectedRegion.people.map((person, idx) => (
                                <div className="col-12 col-sm-6 col-md-3 mb-3" key={idx}>
                                    <div
                                        className="founder-image-wrapper"
                                        style={{
                                            borderRadius: "20px",
                                            background: "#FFF",
                                            boxShadow: "14px 10px 36px -4px rgba(0, 0, 0, 0.10)"
                                        }}
                                        onMouseEnter={() => setHovered(idx)}
                                        onMouseLeave={() => setHovered(null)}
                                    >
                                        <img src={person.img} className="card-img-top" alt={person.name} />

                                        <div className={`overlay-card ${hovered === idx ? "large" : "small"}`}>
                                            {hovered !== idx ? (
                                                <div>
                                                    <h5 className="card-title">{person.name}</h5>
                                                    <p className="card-text">{person.role}</p>
                                                </div>
                                            ) : (
                                                <div>
                                                    <h5 className="card-title">{person.name}</h5>
                                                    <p className="card-text text-muted small">{person.role}</p>
                                                    <p className="small">{person.additionalInfo || "No additional info available."}</p>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Modal.Body>
                </Modal>
            )}
        </div>
    );
}
