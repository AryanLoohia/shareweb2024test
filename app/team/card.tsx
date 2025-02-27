import React from "react";

interface CardProps {
  name: string;
  // portfolio?: string;
  pic: string;
  linkedin?: string;
  twitter?: string;
  email?: string;
}

const Card: React.FC<CardProps> = ({
  name,
  // portfolio,
  pic,
  linkedin,
  email,
  twitter,
}) => {
  return (
    <div>
      <div className="flex flex-col justify-center max-w-xs p-6 mx-2 rounded-xl sm:px-12 dark:bg-zinc-900 dark:text-gray-800 border border-emerald-500 shadow-[5px_5px_0px_0px_rgba(31,78,47)]">
        <img
          src={pic}
          alt=""
          className="w-32 h-32 mx-auto border-2 border-emerald-500 rounded-full  aspect-square"
        />
        <div className="space-y-4 text-center divide-y dark:divide-gray-300">
          <div className="my-2 space-y-1">
            <h2 className="text-xl font-semibold text-gray-300 sm:text-2xl">
              {" "}
              {name}{" "}
            </h2>
            {/* <p className="px-5 text-xs sm:text-base dark:text-gray-500">
              {portfolio}
            </p> */}
          </div>
          <div className="flex justify-center pt-2 space-x-4 align-center">
            <a
              className="text-gray-700  dark:text-white"
              href={linkedin}
              target="_blank"
              rel="noreferrer"
            >
              <span className="sr-only">LinkedIn</span>
              <svg
                className="size-[1rem]"
                fill="currentColor"
                viewBox="0 0 16 16"
                aria-hidden="true"
              >
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
              </svg>
            </a>

            <a
              className="text-gray-700 dark:text-white"
              href={twitter}
              target="_blank"
              rel="noreferrer"
            >
              <span className="sr-only">X (Twitter)</span>
              <svg
                className="size-[1rem]"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a
              className="text-gray-700 dark:text-white"
              href={`mailto:${email}`}
              target="_blank"
              rel="noreferrer"
            >
              <span className="sr-only">Mail</span>
              <svg
                className="size-[1rem]"
                fill="currentColor"
                viewBox="0 0 16 16"
                aria-hidden="true"
              >
                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
