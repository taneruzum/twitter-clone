import Button from "../../../../components/button";
export default function Premium() {
  return (
    <section
      className="bg-[#16181c] mb-4 rounded-2xl border border-[#16181c]
        pt-2 pb-3 px-4 flex flex-col gap-2 text-[#e7e9ea] 
        "
    >
      {/*gap şuan 2 ama 2.5 olabilir ilerde*/}
      <h6 className="text-xl leading-8 font-extrabold">
        Premium&apos;a Abone Ol{" "}
      </h6>{" "}
      {/* &apos == tırnak işaretine denk geliyor apostrophe, leading-6 line heigth demek */}
      <p className="leading-5 text-[15px] font-bold break-words pr-0.5">
        Yeni özellikleri açmak için abone ol ve uygun olman durumunda reklam
        geliri payı kazan.
      </p>
      <div className="self-start">
        <Button size="normal" className="">
          Abone ol
        </Button>
      </div>
    </section>
  );
}
