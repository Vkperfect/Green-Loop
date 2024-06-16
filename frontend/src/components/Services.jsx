import Aos from "aos";
import React, { useEffect } from "react";
import "aos/dist/aos.css";

const Services = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  const cardsData = [
    {
      img: "/assets/waste-material-procurement.png",
      feature: "Waste Material Procurement",
      description:
        "Connect with verified sellers to procure high-quality waste materials for recycling or repurposing purposes. Streamline your purchasing process with our platform, making it efficient and hassle-free.",
    },
    {
      img: "/assets/custom-solutions.png",
      feature: "Customized Waste Solutions",
      description:
        "Get tailored waste management solutions to meet your unique requirements. Our experts will help you optimize your waste management processes and achieve your sustainability goals.",
    },
    {
      img: "/assets/quality-assurance.png",
      feature: "Quality Assurance",
      description:
        "Rest assured that you'll receive materials of the highest quality and safety standards. We rigorously vet our sellers to ensure that you get the best waste materials for your needs.",
    },
    {
      img: "/assets/transparent-transactions.png",
      feature: "Transparent Transactions",
      description:
        "We believe in transparency and integrity in all our transactions. Our platform provides clear information about the materials you're purchasing, including origin, composition, and pricing.",
    },
    {
      img: "/assets/logistics-support.png",
      feature: "Logistics Support",
      description:
        "We offer comprehensive logistics support to ensure timely delivery of your purchased waste materials. From transportation to documentation, we've got you covered.",
    },
    {
      img: "/assets/customer-support.png",
      feature: "24/7 Customer Support",
      description:
        "Our dedicated customer support team is available 24/7 to assist you with any questions or concerns. Feel free to reach out to us anytime for prompt assistance.",
    },
  ];

  const sellersData = [
    {
      img: "/assets/marketplace.png",
      feature: "Marketplace for Waste Materials",
      description:
        "Reach a wide network of potential buyers by listing your waste materials on our platform. Showcase your materials, negotiate deals, and finalize transactions seamlessly.",
    },
    {
      img: "/assets/efficient-sales.png",
      feature: "Efficient Sales Process",
      description:
        "Simplify your sales process with our platform. We handle the logistics, allowing you to focus on showcasing your materials and closing deals.",
    },
    {
      img: "/assets/marketing-support.png",
      feature: "Marketing Support",
      description:
        "Promote your materials and attract more buyers with our marketing support services. From targeted campaigns to strategic partnerships, we help you maximize your exposure and increase sales.",
    },
    {
      img: "/assets/data-analytics.png",
      feature: "Data Analytics",
      description:
        "Gain valuable insights into market trends, demand patterns, and pricing dynamics with our advanced data analytics tools. Make informed decisions and stay ahead of the competition.",
    },
    {
      img: "/assets/consulting-services.png",
      feature: "Consulting Services",
      description:
        "Get expert advice and guidance from our team of waste management consultants. Whether you need assistance with waste audits, compliance issues, or sustainability strategies, we're here to help.",
    },
    {
      img: "/assets/training-education.png",
      feature: "Training and Education",
      description:
        "Stay updated on industry best practices and regulations with our training programs and educational resources. Empower your team to succeed in the waste management industry.",
    },
  ];

  return (
    <div>
      <p className="text-center text-4xl font-bold text-[#33cc33] py-4">
        Welcome to Our Waste Management Services
      </p>
      <p className="w-3/5 mx-auto text-justify text-xl">
        At <span className="text-4xl font-bold text-[#33cc33]">GreenLoop</span>,
        we are committed to providing comprehensive waste management solutions
        tailored to meet the needs of both buyers and sellers. Our platform
        facilitates seamless transactions and promotes sustainability in waste
        management practices.
      </p>

      {/* For buyers */}
      <div className="my-10">
        <p className="text-4xl font-bold text-center">For Buyers</p>
        {/* grid */}
        <div className="w-4/5 md:w-3/5 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mt-16">
          {cardsData.map((card, index) => (
            <div
              key={index}
              data-aos="fade-up-right"
              data-aos-delay={`${index * 250}`}
              className="border border-[#33cc33] text-[#121212] w-fit flex flex-col hover:text-gray-300 hover:bg-[#33cc33] gap-2 sm:gap-6 rounded-3xl py-10 px-6 justify-center items-center"
            >
              <p className="text-lg lg:text-2xl font-bold">{card.feature}</p>
              <p>{card.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="my-10">
        <p className="text-4xl font-bold text-center">For Sellers</p>
        {/* grid */}
        <div className="w-4/5 md:w-3/5 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mt-16">
          {sellersData.map((card, index) => (
            <div
              key={index}
              data-aos="fade-up-right"
              data-aos-delay={`${index * 250}`}
              className="border border-[#33cc33] text-[#121212] w-fit flex flex-col hover:text-gray-300 hover:bg-[#33cc33] gap-2 sm:gap-6 rounded-3xl py-10 px-6 justify-center items-center"
            >
              <p className="text-lg lg:text-2xl font-bold">{card.feature}</p>
              <p>{card.description}</p>
            </div>
          ))}
        </div>
        <p className="text-lg w-3/5 mx-auto mt-10 text-[#33cc33] text-justify">
          Whatever your waste management needs may be,<span className="text-3xl font-bold"> GreenLoop</span>  is
          committed to providing innovative solutions and exceptional service
          every step of the way. Get in touch with us today to learn more about
          how we can help you achieve your waste management goals.
        </p>
      </div>
    </div>
  );
};

export default Services;
