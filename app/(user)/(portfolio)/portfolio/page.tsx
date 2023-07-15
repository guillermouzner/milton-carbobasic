"use client";
import * as React from "react";
import Image from "next/image";

import {cn} from "@/lib/utils";
import {ProjectRecord} from "@/components/milton/project-record";

export default function PortfolioPage() {
  const [toggleStateA, setToggleStateA] = React.useState(1);

  function toggleTabA(index: number) {
    setToggleStateA(index);
  }

  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col justify-center items-center gap-5 font-medium">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="relative cursor-pointer w-56 md:w-72 h-56 md:h-72">
            <Image
              priority
              alt="industries"
              className="object-cover w-full h-full rounded-xl"
              height={288}
              src="/industries.png"
              width={288}
            />
            <p className="absolute top-0 left-1/2 transform -translate-x-1/2 text-white bg-green-600 px-6 py-2 rounded-md">
              Industries
            </p>
          </div>

          <div className="relative cursor-pointer w-56 md:w-72 h-56 md:h-72">
            <Image
              alt="projects"
              className="object-cover w-full h-full rounded-xl"
              height={300}
              src="/projects.png"
              width={300}
            />
            <p className="absolute top-0 left-1/2 transform -translate-x-1/2 text-white bg-green-600 px-6 py-2 rounded-md">
              Projects
            </p>
          </div>

          <div className="relative cursor-pointer w-56 md:w-72 h-56 md:h-72">
            <Image
              alt="services"
              className="object-cover w-full h-full rounded-xl"
              height={300}
              src="/services.png"
              width={300}
            />
            <p className="absolute top-0 left-1/2 transform -translate-x-1/2 text-white bg-green-600 px-6 py-2 rounded-md">
              Services
            </p>
          </div>

          <div className="relative cursor-pointer w-56 md:w-72 h-56 md:h-72">
            <Image
              alt="expertise"
              className="object-cover w-full h-full rounded-xl"
              height={300}
              src="/expertise.png"
              width={300}
            />
            <p className="absolute top-0 left-1/2 transform -translate-x-1/2 text-white bg-green-600 px-6 py-2 rounded-md">
              Expertise
            </p>
          </div>
        </div>

        <div className="py-1 px-8 rounded-xl bg-green-600 text-lg text-blue-900 font-bold">
          <p>Projects Record</p>
        </div>

        <div className="py-1 px-8 font-bold text-xl">
          <p className="text-green-600">
            CARBO<span className="text-blue-900">BASIC</span>
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <ProjectRecord
            project="Process Engineering for FEED
              Studies in the petrochemical sector. Client Simon Carves (Manchester, UK)."
            year={2022}
          />

          <ProjectRecord
            project="Process Engineering in a Conceptual Study for the nuclear industry. Client Babcock - Cavendish Nuclear (Birchwood, UK)."
            year={2022}
          />
          <ProjectRecord
            project="Project Engineering Management for Proposals of LNG and other cryogenics barges and carriers. Client Gas and Heat (Pisa, Italy)."
            year={2021}
          />
          <ProjectRecord
            project="Project Engineering Management for a COMAH Assurance project for the new appointed low tier COMAH site in the Waste Water Treatment sector. Client United Utilities Manchester Bioresources Centre (MBC). "
            year={2021}
          />
          <ProjectRecord
            project="EfW projects. Process Engineering for Extended Basic Engineering and Detail Engineering projects. Client KEW Technology (Birmingham, UK)."
            year={2021}
          />
          <ProjectRecord
            project="UniSim Flare simulations, vent systems verification for LNG and other cryogenic carriers. Process Engineer of FSU-FRU Detail Engineering project. Client TGE Marine GmbH (Bonn, Germany)."
            year={2021}
          />
          <ProjectRecord
            project="px heat exchanger (Saint Fergus, Scotland). FEED study Process Engineering. Client Costain, final user px"
            year={2019}
          />
        </div>

        <div className="flex flex-col lg:flex-row py-1 px-8 text-xs items-center gap-3">
          <p className="text-green-600 text-2xl font-bold">
            MILTON <span className="text-blue-900">AVILA</span>
          </p>
          <div className="flex whitespace-nowrap flex-col md:flex-row gap-3 font-light">
            <p
              className={cn(
                "px-4 py-1 rounded-lg border cursor-pointer bg-background font-semibold transition duration-500 ease-in-out hover:bg-green-600 hover:border-blue-900",
                toggleStateA === 1 ? "bg-green-600 border-blue-900 font-semibold" : "",
              )}
              onClick={() => toggleTabA(1)}
            >
              for TGE Gas Engineering.
            </p>
            <p
              className={cn(
                "px-4 py-1 rounded-lg border cursor-pointer bg-background font-semibold transition duration-500 ease-in-out hover:bg-green-600 hover:border-blue-900",
                toggleStateA === 2 ? "bg-green-600 border-blue-900 font-semibold" : "",
              )}
              onClick={() => toggleTabA(2)}
            >
              for A-Evangelista S.A.
            </p>
            <p
              className={cn(
                "px-4 py-1 rounded-lg border cursor-pointer bg-background font-semibold transition duration-500 ease-in-out hover:bg-green-600 hover:border-blue-900",
                toggleStateA === 3 ? "bg-green-600 border-blue-900 font-semibold" : "",
              )}
              onClick={() => toggleTabA(3)}
            >
              for other companies.
            </p>
          </div>
        </div>

        <div
          className={cn("grid-cols-1 md:grid-cols-2 gap-5", toggleStateA === 1 ? "grid" : "hidden")}
        >
          <ProjectRecord
            project="Propylene Sphere Tank Project (Bataan, Philippines). Process Engineering for Pre-Commissioning and Construction stages for Whessoe (Makati, Philippines), final user Petron."
            year={2019}
          />
          <ProjectRecord
            project="LPG Peak Shaving plant Avonmouth (Avonmouth, UK). Process Engineering for a FEED study, final user Flogas"
            year={2018}
          />
          <ProjectRecord
            project="FSU-FRU LNG (Ghana). Detail Engineering for TGE Marine GmbH, final user Gasfin S.A"
            year={2018}
          />
          <ProjectRecord
            project="Butane Storage Tank and Terminal (Rotterdam, Holland). Process Engineering for a FEED study, final user HES."
            year={2017}
          />
          <ProjectRecord
            project="LNG Bunkering (Tallin, Estonia). Process Engineering for a Conceptual Study, final user AS Vopak E.O.S."
            year={2017}
          />
          <ProjectRecord
            project="Ethane Storage Terminal (Grangemouth, Scotland). Commissioning Engineer, final user INEOS."
            year={2016}
          />
          <ProjectRecord
            project="Ethane Storage Terminal (Grangemouth, Scotland). Operating Instructions for operators, final user INEOS."
            year={2015}
          />
          <ProjectRecord
            project="5100 cbm LNG Carrier (South Korea). Process Engineering for a Conceptual Study for TGE Marine GmbH, final user Hanjin Industries and Construction."
            year={2015}
          />
          <ProjectRecord
            project="Beynes Dehydration Unit (Paris, France). Performance Test, final user Storengy."
            year={2015}
          />
          <ProjectRecord
            project="BOG Recondenser (Boryeong, South Korea). Design and Detail Engineering of a BOG Recondenser, final user GS Engineering."
            year={2014}
          />
          <ProjectRecord
            project=" Zangzhou LNG Terminal (Zangzhou, China). Process Engineering for a FEED Study, final user CNOOC-Fujian."
            year={2014}
          />
          <ProjectRecord
            project="As Sarah VI Dehydration Unit (Lybia). Process Engineering for a Detail Engineering EP+CS project, final user Wintershall."
            year={2013}
          />
        </div>

        <div
          className={cn("grid-cols-1 md:grid-cols-2 gap-5", toggleStateA === 2 ? "grid" : "hidden")}
        >
          <ProjectRecord
            project="LNG Regasification Plant (Puerto Cuatreros, Buenos Aires Province, Argentina). Process Engineering for a Conceptual and Feasibility Study, final user YPF S.A"
            year={2012}
          />
          <ProjectRecord
            project="Pipelines for Fire Fighting System, Fire & Gas Detection Instruments System. (Canning, Buenos Aires Province, Argentina). Project Engineering for a Detail Engineering and Construction, final user A-Evangelista S.A."
            year={2011}
          />
          <ProjectRecord
            project="Sulfur Recovery Unit (Montevideo, Uruguay). EPC Project. Process Engineering and Engineering Coordination for a Detail Engineering, Construction, Pre-commissioning & Commissioning project, final user ANCAP."
            year={2009}
          />
          <ProjectRecord
            project="Topping Plant (Trompeteros, Peru). Process Engineering for Detail Engineering, site supervision, Precommissioning & Commissioning stages, final user Pluspetrol."
            year={2008}
          />
          <ProjectRecord
            project="LTS skids (with C2 & C3/C4 stabilizers). Process Engineering for Detail Engineering and Pre-commissioning of an EP+CS project for Tipiel Colombia."
            year={2007}
          />
          <ProjectRecord
            project="Splitter II (Luján de Cuyo, Mendoza Province, Argentina). Process Engineering for Detail Engineering and Head Commissioning Engineer for Construction and Performance Test, final user Repsol-YPF."
            year={2006}
          />
          <ProjectRecord
            project="CRU, Contaminants Removal Unit (Yacuiba, Bolivia). Process Engineering for Basic and Detail Engineering, Construction, Pre-commissioning, Commissioning, Start Up and Performance, final user Petrobras."
            year={2006}
          />
          <ProjectRecord
            project=" LTS El Portón (El Portón, Neuquén Province, Argentina. Process Engineering for Basic and Detail Engineering and Pre-commissioning, final user Repsol-YPF."
            year={2005}
          />
          <ProjectRecord
            project="Carina & Aries LTS (Rio Grande, Tierra del Fuego province, Argentina, for Total E&P). Pre-commissioning Process Engineer. Support from office to Commissioning team on site."
            year={2005}
          />
        </div>

        <div
          className={cn("grid-cols-1 md:grid-cols-2 gap-5", toggleStateA === 3 ? "grid" : "hidden")}
        >
          <ProjectRecord
            project="Agrochemicals production (Zárate, Buenos Aires Province, Argentina). Manufacturing Engineer at IPESA S.A. (now Agrofina S.A.)"
            year={2004}
          />
          <ProjectRecord
            project="Process Engineer, Industrial Safety and Risks Analyst (Buenos Aires city, Argentina). Project Engineering for Hazardous Areas studies, QRA, and main industrial risks analysis studies for various projects at E.I.S.S.A. (Estudio Ingeniero Solano S.A.). "
            year={2003}
          />
        </div>
      </div>
    </div>
  );
}
