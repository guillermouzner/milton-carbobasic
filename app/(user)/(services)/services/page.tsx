import Image from "next/image";

export default function ServicesPage() {
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-5 font-medium">
        <div className="flex flex-col gap-2">
          <p>
            Carbobasic provides Engineering Consultancy services for different stages of a project.
            The range of services are focused in Project and Process Engineering.
          </p>
          <p>
            Conceptual Engineering, Feasibility Studies, FEED Studies, Detail Engineering,
            Pre-commissioning, Commissioning, Start-up, Test runs/Performance Tests. Carbobasic can
            offer their experience in a wide range of industries.
          </p>
          <p>
            Carbobasic can produce process simulations for your project (static and dynamic),
            equipment sizing, flare systems design and rating, FAT & SAT and site surveys.
          </p>
          <p>
            For projects in the South American region, we are also offering piping mounting and
            supervision for different types of industries, including Mining.
          </p>
        </div>

        <div className="flex flex-col gap-5">
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <Image
              alt="cyrogenic"
              className="rounded-xl order-2 md:order-1"
              height={250}
              src="/cyrogenic.png"
              width={250}
            />
            <div className="flex flex-col gap-3 order-1 md:order-2">
              <p className="text-lg max-w-min px-2 py-1 font-bold text-blue-900 border-2 rounded-lg border-green-600">
                Cyrogenic
              </p>
              <p className="text-sm">
                Liquified gases are used in many applications. For bulk transportation purposes,
                gases are liquified and stored in tanks on ships, trucks or rail-trucks. Normally,
                on-shore storage in tanks is at atmospheric pressure or it can be pressurised in
                bullets or spheres. It is not well defined at what point on the temperature scale
                refrigeration ends and cryogenics begins, but scientists assume a gas to be
                cryogenic if it can be liquefied at or below -150 °C, which the case of the LNG.
                Many projects include a regasification unit (onshore or FRU) that delivers gas for
                distribution or to a product user.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-6 items-center">
            <Image
              alt="petrochemical"
              className="rounded-xl order-2 md:order-1"
              height={250}
              src="/petrochemical.png"
              width={250}
            />
            <div className="flex flex-col gap-3 order-1 md:order-2">
              <p className="text-lg max-w-min px-2 py-1 font-bold text-blue-900 border-2 rounded-lg border-green-600">
                Petrochemical
              </p>
              <p className="text-sm">
                Petrochemicals are the chemical products obtained from petroleum by refining. Some
                chemical compounds made from petroleum are also obtained from other fossil fuels,
                such as coal or natural gas, or renewable sources such as maize, palm fruit or sugar
                cane. Carbobasic offer their experience in petrochemical projects in engineering
                design for the high- and low-pressure polyethylene industry, among others.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-6 items-center">
            <Image
              alt="oilgas"
              className="rounded-xl order-2 md:order-1"
              height={250}
              src="/oilgas.png"
              width={250}
            />
            <div className="flex flex-col gap-3 order-1 md:order-2">
              <p className="text-lg whitespace-nowrap max-w-min px-2 py-1 font-bold text-blue-900 border-2 rounded-lg border-green-600">
                Oil & Gas
              </p>
              <p className="text-sm">
                Petroleum engineers help find oil and gas to supply the necessity of the consumers.
                Engineers design and develop methods for separation and treatment of the different
                components of Petroleum and for processing the product for delivery at conditions
                that meet the regulations and international standards. Carbobasic expertise in the
                Oil & Gas industry is mainly based in gas treatment units and downstream units such
                as Claus and tail gas treatment plants, Naphtha Splitters, distillation units,
                hydrocarbon storage, utilities design and general equipment design among others.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <Image
              alt="cyrogenic"
              className="rounded-xl order-2 md:order-1"
              height={250}
              src="/cyrogenic.png"
              width={250}
            />
            <div className="flex flex-col gap-3 order-1 md:order-2">
              <p className="text-lg max-w-min px-2 py-1 font-bold text-blue-900 border-2 rounded-lg border-green-600">
                Nuclear
              </p>
              <p className="text-sm">
                Large-scale nuclear is a very low-carbon technology, which provides a reliable
                baseload power at scale from a very small land area. As confirmed by the UNs
                International Atomic Energy Agency, nuclear power plants ‘are among the safest and
                most secure facilities in the world, and nuclear power is one of the safest forms of
                energy generation. Traditional nuclear power plants use heat produced during nuclear
                fission to produce steam. The steam is used to spin large turbines that generate
                electricity. Both the Committee on Climate Change and the International Energy
                Agency have highlighted the role for new nuclear electricity generating capacity, in
                partnership with renewables, as a key element of achieving net zero. A recent report
                by the UN Economic Commission for Europe was clear that “the worlds climate
                objectives will not be met if nuclear technologies are excluded” from future
                decarbonisation.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-6 items-center">
            <Image
              alt="cyrogenic"
              className="rounded-xl order-2 md:order-1"
              height={250}
              src="/cyrogenic.png"
              width={250}
            />
            <div className="flex flex-col gap-3 order-1 md:order-2">
              <p className="text-lg max-w-min px-2 py-1 font-bold text-blue-900 border-2 rounded-lg border-green-600">
                Hydrogen
              </p>
              <p className="text-sm">
                Hydrogen and energy have a long shared history - powering the first internal
                combustion engines over 200 years ago to becoming an integral part of the modern
                refining industry. It is light, storable, energy-dense, and produces no direct
                emissions of pollutants or greenhouse gases. But for hydrogen to make a significant
                contribution to clean energy transitions, it needs to be adopted in sectors where it
                is almost completely absent, such as transport, buildings and power generation. The
                Future of Hydrogen provides an extensive and independent survey of hydrogen that
                lays out where things stand now; the ways in which hydrogen can help to achieve a
                clean, secure and affordable energy future; and how we can go about realising its
                potential.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-6 items-center">
            <Image
              alt="cyrogenic"
              className="rounded-xl order-2 md:order-1"
              height={250}
              src="/cyrogenic.png"
              width={250}
            />
            <div className="flex flex-col gap-3 order-1 md:order-2">
              <p className="text-lg whitespace-nowrap max-w-min px-2 py-1 font-bold text-blue-900 border-2 rounded-lg border-green-600">
                Energy from Waste
              </p>
              <p className="text-sm">
                EfW is an energy recovery process that generates renewable power in the form of
                electricity, heat or transport fuels from the controlled incineration of residual
                waste. An EfW plant contributes towards carbon emissions reductions and the reuse
                and recycling of materials that would otherwise go to landfill. The energy from
                waste or waste-toenergy industry is continuing to advance to provide more than just
                a renewable power source.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
