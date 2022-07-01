import math from '/Users/isee/PERSO/mon-app-portfolio/src/image/bannerS.png';

export default function About() {
    return (
        <section id="about">
          <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
              <img
                className="object-cover object-center rounded"
                alt="Mathematics"
                src={math}
                style={{minWidth: 300, minHeight: 300}}
              />
            </div>
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                Hi, I'm Isée Besombes. <br /> blablabla
                <br className="hidden lg:inline-block" />I love Mathematics.
              </h1>
              <p className="mb-8 leading-relaxed">
              My background in fundamental mathematics along with programming and more applied concepts of mathematics allow me to deal with many problems by 
              having both the <br /> theoretical knowledge and the ability to implement it with different tools.
              </p>
              <div className="flex justify-center">
                <a
                  href="#contact"
                  className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                  Work With Me <br />
                </a>
                <a
                  href="#projects"
                  className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                  See My Past Work
                </a>
              </div>
            </div>

          </div>
        </section>
      );
    }