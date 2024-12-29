import { Button, Flex, Input, Space } from "antd";
import Navbar from "../Components/Nav";
import FooterImage from "../assets/footer.png";
import { Icon } from "@iconify/react/dist/iconify.js";

function Aboute() {
  let teamsMembers = [
    {
      name: "Muhammad",
      role: "Founder and CEO",
      image: "https://example.com/image1.jpg",
    },
    {
      name: "Rizky",
      role: "Lead Developer",
      image: "https://example.com/image1.jpg",
    },
    {
      name: "Febriyanto",
      role: "uiux designer",
      image: "https://example.com/image1.jpg",
    },
  ];

  return (
    <>
      <div className="w-full h-auto relative pt-5 overflow-hidden bg-primary">
        <Navbar />
        <div className="relative flex flex-col justify-center items-start w-full h-[400px] bg-gradient-to-r from-secondary sm:from-20% to-transparent px-10 text-white">
          <h1 className="text-5xl font-bold mb-4 leading-tight">About Us</h1>
          <p className="text-lg mb-6">
            At WAOW, we strive to deliver the best experiences through our
            products and services. Learn more about our journey and the people
            behind the scenes.
          </p>
          <Button
            className="py-2 px-6 bg-red-500 text-white rounded font-semibold hover:bg-secondary-dark transition"
            onClick={() => alert("Explore More Clicked")}
          >
            Explore More
          </Button>
        </div>
      </div>

      <div className="w-11/12 md:max-w-[950px] mx-auto my-20">
        <h2 className="text-3xl font-semibold text-white mb-10">Our Team</h2>
        <div className="grid md:grid-cols-3 gap-10">
          {TeamMembers.map((member, id) => (
            <div
              key={`team-member-${id}`}
              className="bg-secondary border-2 rounded-xl border-white p-5 flex flex-col items-center group hover:bg-white cursor-pointer transition-all"
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-32 h-32 rounded-full mb-4"
              />
              <p className="text-lg font-semibold text-white group-hover:text-primary">
                {member.name}
              </p>
              <p className="text-sm text-white/70 group-hover:text-secondary">
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </div>

      <footer className="bg-black/20 pt-10 pb-5">
        <div className="grid md:grid-cols-3 gap-5 w-11/12 mx-auto">
          <div>
            <p className="text-5xl font-semibold text-white">WAOW</p>
            <Flex gap={10} className="mt-5">
              <a
                href="#"
                className="bg-white/30 flex justify-center items-center w-9 h-9 rounded-full"
              >
                <Icon icon="mdi:instagram" className="text-xl text-white" />
              </a>
              <a
                href="#"
                className="bg-white/30 flex justify-center items-center w-9 h-9 rounded-full"
              >
                <Icon icon="cib:facebook" className="text-xl text-white" />
              </a>
              <a
                href="#"
                className="bg-white/30 flex justify-center items-center w-9 h-9 rounded-full"
              >
                <Icon
                  icon="simple-icons:linkedin"
                  className="text-xl text-white"
                />
              </a>
            </Flex>
          </div>
          <Flex justify="center" align="center" vertical={true}>
            <div>
              <p className="mb-3 font-semibold text-white">Subscribe to WAOW</p>
              <Space.Compact>
                <Input />
                <Button type="primary">Submit</Button>
              </Space.Compact>
            </div>
          </Flex>
          <Flex justify="center" align="center">
            <img src={FooterImage} className="h-[200px]" alt="Footer" />
          </Flex>
        </div>
      </footer>
    </>
  );
}
