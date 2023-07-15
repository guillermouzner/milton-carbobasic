import Image from "next/image";

export default async function IndexPage() {
  return (
    <div className="flex flex-col justify-center items-center gap-10 min-h-full">
      <Image alt="Milton" height={256} src="/milton.png" width={256} />
      <h1 className="text-sm md:text-xl lg:text-3xl capitalize text-sky-900 border p-3 rounded-xl border-green-600">
        Leaders in <span className="font-black">Engineering Consultation</span>
      </h1>
    </div>
  );
}
