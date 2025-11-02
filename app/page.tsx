import { images } from "@/utils/image";
import Image from "next/image";
import { FaInstagram, FaGoogleDrive, FaLinkedinIn } from "react-icons/fa";
import { BsSubstack } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";

export default function Home() {
  return (
    <div className="bg_image min-h-screen">
      <div className="lg:container mx-auto">
        <section className="flex md:w-9/12 mx-auto bg-[#7d3131] h-36 md:translate-y-12">
          <h2 className="text-white text-2xl lg:text-5xl m-auto">
            AJAH NDIDI PATIENCE
          </h2>
        </section>
        <div className="md:w-9/12 mx-auto mt-16">
          <p className="text-sm md:text-lg lg:text-2xl lg:font-semibold mb-4 mt-8">
            Copywriter
          </p>
          <p className="text-sm md:text-lg lg:text-2xl lg:font-semibold">
            Email marketer, creative writer, content writer, Email writer,
            digital marketer.
          </p>
        </div>
        <section className="md:w-9/12 mx-auto">
          {/* About Section */}
          <div className="shadow-2xl flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-center mb-4 mt-20 p-4">
            <div className="">
              <Image
                src={images.image_patience}
                alt="patience_img"
                className="w-full h-[451.75px]"
              />
            </div>
            <div className="flex-1">
              <h3 className="text-xl lg:text-4xl mb-4 font-semibold font-sans">
                About Me
              </h3>
              <p className="text-base lg:text-2xl leading-10">
                As a psychology student, I perceive myself as an observant and
                open-minded individual with a strong affinity for written
                communication. As a poet, it allows me to establish connections
                with others on mental, psychological, and, to some degree,
                physical levels.
              </p>
            </div>
          </div>
          <p className="text-sm md:text-lg lg:text-2xl lg:font-semibold mb-4">
            &quot;Every great project begins with a simple idea.&quot;
          </p>
          <p className="text-sm md:text-lg lg:text-2xl lg:font-semibold">
            Your next big move starts with one message.
          </p>
          <section className="mt-28 -translate-y-12 flex gap-5">
            <div className="rounded-full border-2 border-white w-fit p-2 cursor-pointer group hover:bg-white ease-linear duration-700">
              <a
                href="https://www.instagram.com/ajahpatience?igsh=MTV0YnJqeDNlODJsdQ=="
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="group-hover:text-[#7d3131] ease-linear duration-700" />
              </a>
            </div>
            <div className="rounded-full border-2 border-white w-fit p-2 cursor-pointer group hover:bg-white ease-linear duration-700">
              <a
                href="https://drive.google.com/drive/folders/1RPaTlc2AQ-muY0LbITOOYwIF1btEhgBH"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGoogleDrive className="group-hover:text-[#7d3131] ease-linear duration-700" />
              </a>
            </div>
            <div className="rounded-full border-2 border-white w-fit p-2 cursor-pointer group hover:bg-white ease-linear duration-700">
              <a
                href="https://www.linkedin.com/in/patience-ajah-8175182b1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn className="group-hover:text-[#7d3131] ease-linear duration-700" />
              </a>
            </div>
            <div className="rounded-full border-2 border-white w-fit p-2 cursor-pointer group hover:bg-white ease-linear duration-700">
              <a
                href="https://substack.com/@patienceajah?utm_source=share&utm_medium=android&r=40llkf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsSubstack className="group-hover:text-[#7d3131] ease-linear duration-700" />
              </a>
            </div>
            <div className="group rounded-full border-2 border-white w-fit p-2 cursor-pointer hover:bg-white ease-linear duration-700">
              <a
                href="mailto:patienceajah900@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MdOutlineEmail className="group-hover:text-[#7d3131] ease-linear duration-700" />
              </a>
            </div>
          </section>
        </section>
      </div>
    </div>
  );
}
