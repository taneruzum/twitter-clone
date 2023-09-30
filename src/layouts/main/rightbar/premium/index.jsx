import Button from "../../../../components/button";
export default function Premium() {
  return (
    <section
      className="bg-[color:var(--background-secondary)] mb-4 rounded-2xl border border-[color:var(--background-secondary)]
        pt-2 pb-3 px-4 flex flex-col gap-2    
        "
    >
      {/*gap şuan 2 ama 2.5 olabilir ilerde*/}
      <h6 className="text-xl leading-8 font-extrabold">
        Premium&apos;a Abone Ol{" "}
      </h6>{" "}
      {/* &apos == tırnak işaretine denk geliyor apostrophe, leading-6 line heigth demek */}
      <p className="leading-5 text-[0.938rem] font-bold break-words pr-0.5">
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
