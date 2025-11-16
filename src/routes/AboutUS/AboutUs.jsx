import React, { useState } from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

const AboutUs = () => {
  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="py-10 px-5 md:px-16 bg-gray-50 md:mt-10">
      <h1 className="text-3xl md:text-4xl font-extrabold text-center 
        bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        About Us
      </h1>

      <p className="text-center text-gray-600 max-w-3xl mx-auto mt-3">
        Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle.  
        From personal packages to business shipments — we deliver on time, every time.
      </p>

      <div className="mt-10">
        <Box
          sx={{
            width: "100%",
            typography: "body1",
            bgcolor: "white",
            p: 2,
            borderRadius: 2,
            boxShadow: 3,
          }}
        >
          <TabContext value={value}>
            <Box
              sx={{
                borderBottom: 1,
                borderColor: "divider",
                bgcolor: "#f8fafc",
                borderRadius: 1,
              }}
            >
              <TabList
                onChange={handleChange}
                variant="scrollable"
                scrollButtons
                allowScrollButtonsMobile
                aria-label="About Us Tabs"
                textColor="primary"
                indicatorColor="primary"
              >
                <Tab label="Story" value="1" sx={{ fontWeight: "bold" }} />
                <Tab label="Mission" value="2" sx={{ fontWeight: "bold" }} />
                <Tab label="Success" value="3" sx={{ fontWeight: "bold" }} />
                <Tab label="Team & Others" value="4" sx={{ fontWeight: "bold" }} />
              </TabList>
            </Box>

            {/* ===================== STORY ====================== */}
            <TabPanel value="1">
              <h2 className="text-2xl font-semibold text-blue-600 mb-3">Our Story</h2>

              <p className="leading-7 text-gray-700 mb-4">
                Our journey began with a simple observation — people were struggling 
                to get their parcels delivered safely, quickly, and with transparency.
                Traditional delivery systems were often slow, lacked proper tracking,
                and caused unnecessary stress for customers. That’s when we decided
                to create a delivery experience that puts customers first.
              </p>

              <p className="leading-7 text-gray-700 mb-4">
                Starting with just a few team members and a clear vision, we built a 
                service that focuses on real-time tracking, trained riders, and 
                customer support that actually listens. With every successful delivery,
                our confidence grew, and so did the trust of our customers.
              </p>

              <p className="leading-7 text-gray-700 mb-4">
                Today, we serve thousands of customers every month—individuals,
                online sellers, corporate companies, and growing businesses. What 
                started as a dream has become a nationwide delivery network that 
                continues to expand every year.
              </p>

              <p className="leading-7 text-gray-700">
                Our story is still being written, and we are committed to shaping 
                the future of smart logistics in Bangladesh through innovation,
                dedication, and meaningful customer experience.
              </p>
            </TabPanel>

            {/* ===================== MISSION ====================== */}
            <TabPanel value="2">
              <h2 className="text-2xl font-semibold text-blue-600 mb-3">Our Mission</h2>

              <p className="leading-7 text-gray-700 mb-4">
                Our mission is to deliver peace of mind — not just parcels. 
                We want every customer to feel confident knowing their package
                is being handled with care, accuracy, and reliability.
              </p>

              <p className="leading-7 text-gray-700 mb-4">
                We aim to make delivery smarter through technology. That means
                real-time tracking, automated notifications, verified riders,
                and a secure logistics system that minimizes delays and errors.
              </p>

              <p className="leading-7 text-gray-700 mb-4">
                Our mission also focuses on helping small businesses grow. We
                provide flexible delivery solutions, easy COD handling, and
                logistics support so entrepreneurs can run their business
                without worrying about shipments.
              </p>

              <p className="leading-7 text-gray-700">
                Ultimately, our goal is to build Bangladesh’s most trusted
                delivery ecosystem — where speed, safety, and service quality
                come together to create an exceptional experience for everyone.
              </p>
            </TabPanel>

            {/* ===================== SUCCESS ====================== */}
            <TabPanel value="3">
              <h2 className="text-2xl font-semibold text-blue-600 mb-3">Our Success</h2>

              <p className="leading-7 text-gray-700 mb-4">
                Our success is built on trust — the trust of customers who choose
                us every day for their most important deliveries. From personal 
                parcels to business shipments, we have consistently maintained a 
                high delivery success rate that reflects our dedication.
              </p>

              <p className="leading-7 text-gray-700 mb-4">
                Over time, we have partnered with hundreds of e-commerce companies
                and small businesses who rely on our delivery system to keep their
                operations running smoothly. Their growth stories are also part of
                our success.
              </p>

              <p className="leading-7 text-gray-700 mb-4">
                One of our proudest achievements is creating a logistics network
                that covers major cities, suburbs, and remote areas—ensuring fast 
                and reliable delivery for everyone. Our investment in technology,
                training, and infrastructure continues to pay off every day.
              </p>

              <p className="leading-7 text-gray-700">
                But for us, success is not a destination — it is a journey that we
                walk with our customers, employees, and partners. Each milestone
                motivates us to aim higher and deliver even better.
              </p>
            </TabPanel>

            {/* ===================== TEAM ====================== */}
            <TabPanel value="4">
              <h2 className="text-2xl font-semibold text-blue-600 mb-3">
                Our Team & Values
              </h2>

              <p className="leading-7 text-gray-700 mb-4">
                Behind every successful delivery is an entire team working 
                passionately. Our riders, warehouse staff, customer care agents,
                developers, logistics managers, and leadership team — all share
                the same vision of providing top-quality service.
              </p>

              <p className="leading-7 text-gray-700 mb-4">
                We believe in integrity, professionalism, and respect. Every team 
                member is trained to handle parcels with care and treat customers
                with kindness. Our work culture encourages learning, innovation,
                and continuous improvement.
              </p>

              <p className="leading-7 text-gray-700 mb-4">
                Our values go beyond business. We promote safety, sustainability,
                and equal opportunities. We also invest in training programs,
                rider support, and technology upgrades to ensure long-term growth.
              </p>

              <p className="leading-7 text-gray-700">
                As we grow, our team grows with us — stronger, smarter, and more
                dedicated to building a delivery service that truly makes a 
                difference across the country.
              </p>
            </TabPanel>
          </TabContext>
        </Box>
      </div>
    </div>
  );
};

export default AboutUs;
