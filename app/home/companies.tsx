import React from "react";

const Companies = () => {
  return (
    <div className="w-full max-w-5xl mx-auto px-4 md:px-6 py-24">
      <div className="text-center">
        <div
          x-data="{}"
          x-init="$nextTick(() => {
                let ul = $refs.logos;
                ul.insertAdjacentHTML('afterend', ul.outerHTML);
                ul.nextSibling.setAttribute('aria-hidden', 'true');
            })"
          className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]"
        >
          <ul
            x-ref="logos"
            className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
          >
            <li>
              <img
                className="h-40 w-40 object-contain filter brightness-0 invert"
                src="/companylogos/amazon.png"
                alt="Amazon"
              />
            </li>
            <li>
              <img
                className="h-40 w-40 object-contain filter brightness-0 invert"
                src="/companylogos/sunpharma.png"
                alt="Sunpharma"
              />
            </li>
            <li>
              <img
                className="h-40 w-40 object-contain filter brightness-0 invert"
                src="/companylogos/cultureos.png"
                alt="CultureOS"
              />
            </li>
            <li>
              <img
                className="h-40 w-40 object-contain filter brightness-0 invert"
                src="./companylogos/vivaldis.png"
                alt="Vivaldis"
              />
            </li>
            <li>
              <img
                className="h-40 w-40 object-contain filter brightness-0 invert"
                src="./companylogos/amazon.png"
                alt="Amazon"
              />
            </li>
            <li>
              <img
                className="h-40 w-40 object-contain filter brightness-0 invert"
                src="./companylogos/cinestox.png"
                alt="Cinestox"
              />
            </li>
            <li>
              <img
                className="h-40 w-40 object-contain filter brightness-0 invert"
                src="./companylogos/isb.png"
                alt="ISB"
              />
            </li>
          </ul>
          <ul
            x-ref="logos"
            className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
          >
            <li>
              <img
                className="h-40 w-40 object-contain filter brightness-0 invert"
                src="/companylogos/amazon.png"
                alt="Amazon"
              />
            </li>
            <li>
              <img
                className="h-40 w-40 object-contain filter brightness-0 invert"
                src="/companylogos/sunpharma.png"
                alt="Sunpharma"
              />
            </li>
            <li>
              <img
                className="h-40 w-40 object-contain filter brightness-0 invert"
                src="/companylogos/cultureos.png"
                alt="CultureOS"
              />
            </li>
            <li>
              <img
                className="h-40 w-40 object-contain filter brightness-0 invert"
                src="./companylogos/vivaldis.png"
                alt="Vivaldis"
              />
            </li>
            <li>
              <img
                className="h-40 w-40 object-contain filter brightness-0 invert"
                src="./companylogos/amazon.png"
                alt="Amazon"
              />
            </li>
            <li>
              <img
                className="h-40 w-40 object-contain filter brightness-0 invert"
                src="./companylogos/cinestox.png"
                alt="Cinestox"
              />
            </li>
            <li>
              <img
                className="h-40 w-40 object-contain filter brightness-0 invert"
                src="./companylogos/isb.png"
                alt="ISB"
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Companies;
