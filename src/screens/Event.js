import React from "react";
import Line from "../assets/Line";

const image = [
  "https://www.blendernation.com/wp-content/uploads/2022/02/503-workshop-file-259x235.jpeg",
];

const Event = () => {
  return (
    <div class="flex-col flex justify-center align-middle ">
      <Line />
      <div class="flex flex-row justify-between mx-5 mb-5 font-bold uppercase">
        <div class="flex flex-col justify-between w-1/3">
          <h1 class="my-5"> A csodás előadás ideje</h1>
          <div>
            <h1 class="my-5">és időpontja</h1>
          </div>
        </div>
        <img src={image} alt="" class="w-2/5" />
      </div>

      <button
        onClick={"externalLink"}
        class="w-3/4 self-center md:text-center h-12 text-sm bg-black text-white uppercase cursor-pointer rounded flex justify-center align-middle p-2"
      >
        JEGYEK
      </button>
      <div
        onClick={"fbEvent"}
        class="self-center my-5 uppercase flex justify-center align-middle p-2 font-bold text-base"
      >
        FACEBOOK ESEMÉNY
      </div>
      <h1 class="mx-5 font-bold uppercase">ez itt a kert </h1>
      <p class="mx-5 my-5">
        <p>
          8230 Balatonf&uuml;red, Horv&aacute;th M. u. 64. Tel.: 06-87/340-428
        </p>

        <p>
          Online jegyv&aacute;s&aacute;rl&aacute;s:&nbsp;
          <br />
          www.jegy.hu
        </p>

        <p>
          Jegy&aacute;rus&iacute;t&aacute;s Balatonf&uuml;reden:
          <br />
          BSZKK, (Horv&aacute;th M. u. 64.) A Mozi
          jegyp&eacute;nzt&aacute;r&aacute;ban
          <br />
          Tourinform, (Vaszary Gal&eacute;ria, Honv&eacute;d u. 2-4.)
          <br />
          Valamint az előad&aacute;s előtt a helysz&iacute;nen.
        </p>

        <p>
          A jegyek &aacute;ra gyermeknek &eacute;s felnőttnek egyar&aacute;nt,
          kort&oacute;l f&uuml;ggetlen&uuml;l: 2500.-Ft
        </p>

        <p>
          Inform&aacute;ci&oacute;:&nbsp;
          <br />
          Tel.: 70/315 94-98
        </p>

        <p>
          A helyfoglal&aacute;s &eacute;rkez&eacute;si sorrendben
          t&ouml;rt&eacute;nik.
          <br />
          Az előad&aacute;s időtartama 60 perc.
          <br />
          Rossz idő eset&eacute;n a Sportcsarnokban ker&uuml;l
          megrendez&eacute;sre.
          <br />
          Kapunyit&aacute;s: 9:30 &oacute;ra
        </p>

        <p>
          Előadja az Ametist B&aacute;bsz&iacute;nh&aacute;z Műv&eacute;szeti
          vezető: Niklesz Ildik&oacute;
          <br />
          Az előad&aacute;st b&aacute;bsz&iacute;npadra &iacute;rta &eacute;s
          rendezte: Sz&iacute;v&oacute;s K&aacute;roly (Blattner-d&iacute;jas)
          <br />
          B&aacute;bokat tervezte: Br&oacute;dy Vera Zene: Pivarnyik
          L&aacute;szl&oacute;
          <br />
          Az előad&aacute;s Br&oacute;dy Vera enged&eacute;ly&eacute;vel
          &eacute;s a Hofra Kft. k&ouml;zvet&iacute;t&eacute;s&eacute;vel
          j&ouml;tt l&eacute;tre.
          <br />
          Aj&aacute;nlott &eacute;letkor 2-7 &eacute;ves korig!
        </p>
      </p>
      <div class="w-full h-80 p-6 justify-center flex">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d106.8195613507864!3d-6.194741395493371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5390917b759%3A0x6b45e67356080477!2sPT%20Kulkul%20Teknologi%20Internasional!5e0!3m2!1sen!2sid!4v1601138221085!5m2!1sen!2sid" />
      </div>
    </div>
  );
};

export default Event;
