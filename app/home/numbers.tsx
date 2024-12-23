"use client";

import Head from "next/head";
import AnimatedCounter from "./AnimatedCounter";
import React from "react";

const Numbers: React.FC = () => {
  return (
    <div className="relative left-48 mt-4 font-inter antialiased h-auto flex flex-col w-[80vw] border-5 border-emerald-500 justify-center bg-zinc-900 overflow-hidden">
      <Head>
        <title>Animated Number Counter</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;800&display=swap"
          rel="stylesheet"
        />
      </Head>

      <section className="grid gap-12 p-10 md:grid-cols-3 md:gap-16">
        <AnimatedCounter
          start={0}
          end={50}
          label="Active Consultants"
          description="Our team of seasoned consultants and analysts ready to take on any business challenge"
          unit="+"
          image={
            <svg
              id="Layer_1"
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 116.45 122.88"
              className="svg-icon"
            >
              <title>consulting</title>
              <path
                fillRule="evenodd"
                d="M75.15,103.34c-16.22,0-5.54,4-3.33-13.67,1.76-14,8.25-20.53,15.81-19.69,7.56-.84,14.05,5.72,15.81,19.69,2.21,17.63,12.89,13.67-3.33,13.67l-6.32,0c0,3.93-.79,4.89,3.24,7.27,8.56,5.06,18.35,1.67,19.42,12.25H0c1.87-21.59,24.69-8.31,26.45-23.33.2-1.69-5.23-6.3-6.16-9.4-2-3.14-2.67-8.12-.51-11.45.85-1.31.48-3.22.48-5,0-18.05,30.22-18.06,30.22,0,0,2.29-.53,3.57.71,5.37,2.09,3,1,8.32-.74,11.11-1.11,3.26-6.8,7.56-6.43,9.4C46.47,112,60.7,103.9,66.58,114.44c3.5-.94,7.71-1.48,11.65-3.81s3.27-3.34,3.24-7.27l-6.32,0ZM40.87,0h41a8.4,8.4,0,0,1,8.38,8.38V32.46a8.4,8.4,0,0,1-8.38,8.38H55.35L42.63,51.78a1.41,1.41,0,0,1-2-.15,1.44,1.44,0,0,1-.34-1L41,40.84h-.11a8.4,8.4,0,0,1-8.38-8.38V8.38A8.4,8.4,0,0,1,40.87,0Zm53.5,17.68A8.23,8.23,0,0,1,101,25.74v20A8.23,8.23,0,0,1,92.83,54h-.3l.69,10h0a1.24,1.24,0,0,1-.29.89,1.23,1.23,0,0,1-1.74.13L78.41,53.67H49.55l8.28-8.43h29.6a7,7,0,0,0,7-7v-20c0-.19,0-.37,0-.55ZM45,25.33a1.42,1.42,0,0,1,0-2.83H71.82a1.42,1.42,0,1,1,0,2.83Zm0-9.7a1.41,1.41,0,1,1,0-2.82H78a1.41,1.41,0,0,1,0,2.82ZM81.88,2.83h-41a5.58,5.58,0,0,0-5.56,5.55V32.46A5.6,5.6,0,0,0,40.87,38h1.72a1.41,1.41,0,0,1,1.31,1.5l-.55,7.92,10.49-9a1.4,1.4,0,0,1,1-.41h27a5.58,5.58,0,0,0,5.55-5.56V8.38a5.57,5.57,0,0,0-5.55-5.55Z"
              />
            </svg>
          }
        />
        <AnimatedCounter
          start={0}
          end={15}
          label="Clients"
          description="Our hall of successful partnerships , a testimonial to our expertise and commitment"
          unit="+"
          image={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="64px"
              height="64px"
              viewBox="0 0 640 640"
              shapeRendering="geometricPrecision"
              textRendering="geometricPrecision"
              imageRendering="optimizeQuality"
              fillRule="evenodd"
              clipRule="evenodd"
            >
              <g id="Layer_1">
                <path
                  fill="black"
                  fillRule="nonzero"
                  d="M244.633 367.493c5.17329,4.74809 7.99616,11.1025 8.43317,17.6459 0.437013,6.62607 -1.61813,13.4411 -6.20086,18.9333 4.41738,-3.51973 9.77965,-5.33865 15.2128,-5.49219 6.50795,-0.188979 13.134,2.01971 18.3191,6.53158 0.070867,0.0590558 0.30709,0.283468 0.685048,0.637803l-4.35832 4.67722 4.38194 -4.68903c0.188979,0.177168 0.354335,0.366146 0.519691,0.555125 4.93707,4.87801 7.46466,11.197 7.67726,17.6459 0.20079,5.84653 -1.51183,11.7757 -5.06699,16.7955 3.09453,-1.60632 6.49614,-2.50397 9.93319,-2.66932 6.03551,-0.30709 12.2482,1.61813 17.1734,5.72842 0.248035,0.20079 0.472447,0.40158 0.673237,0.578747 5.03156,4.50006 7.68907,10.5474 8.03159,16.76 0.342524,6.2363 -1.65356,12.6498 -5.96464,17.8112l-11.5868 13.9017c2.24412,1.35828 4.51187,2.752 6.79142,4.15753 23.6105,14.5514 50.0439,30.839 69.8158,7.21662l-47.6226 -35.8823 11.5749 -15.3427 51.2014 38.5871 4.59454 -1.07482 0.90946 -0.153545c6.48433,-0.874027 11.445,-3.33075 15.0238,-7.22844 2.91736,-3.18902 5.11424,-7.47647 6.63788,-12.7797l-64.737 -43.6423 10.76 -15.9451 67.6544 45.6147c7.97254,-2.05514 14.2206,-5.00794 18.7443,-8.85838 3.37799,-2.87011 5.84653,-6.3426 7.41741,-10.4293l-81.3435 -58.1936 11.1261 -15.638 84.8396 60.6976c5.31503,-0.0944894 9.87414,-1.67719 13.5238,-4.2284 3.25988,-2.27956 5.90558,-5.37408 7.81899,-8.92924 1.94884,-3.61422 3.11815,-7.66545 3.40162,-11.7875 0.389769,-5.69298 -0.897649,-11.445 -4.15753,-16.264 -1.16931,-0.425202 -2.26774,-1.08663 -3.21264,-1.96065 -27.461,-22.7483 -54.3432,-43.1934 -82.3947,-60.8984 -27.6145,-17.4097 -56.5164,-32.2917 -88.4775,-44.2683 -4.98431,0.165356 -9.29539,0.129923 -13.0277,0.0944894 -12.319,-0.118112 -15.1892,-0.141734 -24.3546,17.8231 -6.82686,13.3584 -15.7679,23.3625 -27.1893,28.8547 -10.8308,5.20873 -23.4334,6.18905 -38.0202,1.94884 -21.5908,-6.27173 -26.646,-11.4332 -22.8428,-24.5082 1.03938,-3.5906 3.00004,-7.09851 5.57487,-11.7049 0.673237,-1.20474 1.39372,-2.51578 3.1772,-5.85834 11.1852,-21.0593 20.953,-38.0202 30.5082,-51.603 -9.96863,-1.14568 -17.9884,-2.76381 -25.8546,-5.16148 -8.70483,-2.6457 -16.76,-6.09456 -26.7169,-10.8308l-68.5166 123.344 27.0594 27.9925 10.2993 -11.882c4.70085,-5.40952 11.1261,-8.55129 17.764,-9.17728 6.62607,-0.625992 13.4529,1.22836 18.9687,5.79928 0.106301,0.0826782 0.0472447,0.0472447 0.448824,0.40158 5.25597,4.55911 8.31506,10.8545 8.95287,17.3506 0.448824,4.52368 -0.271657,9.15366 -2.23231,13.3584l10.4647 -12.26 -0.0118112 -0.0118112c0.0590558,-0.070867 0.129923,-0.141734 0.188979,-0.212601l0 -0.0118112c0.141734,-0.165356 0.295279,-0.318902 0.460636,-0.472447 4.70085,-5.11424 11.0316,-7.90167 17.516,-8.31506 6.64969,-0.425202 13.4884,1.64175 18.9097,6.27173l0.0118112 -0.0118112c0.0826782,0.070867 0.153545,0.141734 0.224412,0.20079l0 0c0.177168,0.141734 0.330713,0.295279 0.484258,0.460636zm45.4376 140.258l-11.9765 14.3624c-0.188979,0.224412 -0.366146,0.437013 -0.543314,0.625992 -4.37013,4.88982 -10.3702,7.47647 -16.512,7.78356 -6.0237,0.295279 -12.2364,-1.61813 -17.1734,-5.74023 -0.236223,-0.20079 -0.460636,-0.389769 -0.661425,-0.566936 -5.03156,-4.51187 -7.70088,-10.5474 -8.04341,-16.7719 -0.259846,-4.72447 0.826782,-9.55524 3.25988,-13.8663l-1.27561 1.45277c-0.153545,0.188979 -0.0354335,0.0236223 -0.614181,0.649614 -4.80715,5.12605 -11.2797,7.75994 -17.8585,7.93711 -6.50795,0.188979 -13.1458,-2.01971 -18.3309,-6.53158l0.0118112 -0.0118112 0 0 -0.0118112 0.0118112c-0.129923,-0.118112 -0.259846,-0.236223 -0.389769,-0.366146 -0.118112,-0.106301 -0.212601,-0.20079 -0.30709,-0.283468l-0.0118112 0.0118112c-0.177168,-0.165356 -0.354335,-0.354335 -0.50788,-0.543314 -4.93707,-4.87801 -7.47647,-11.197 -7.68907,-17.6459 -0.141734,-4.45281 0.814971,-8.96468 2.8583,-13.075 -4.39375,3.76776 -9.80327,5.84653 -15.3309,6.20086 -6.63788,0.425202 -13.4765,-1.65356 -18.9097,-6.28354l-0.0118112 0.0118112c-0.070867,-0.0590558 -0.153545,-0.129923 -0.224412,-0.20079l0 0c-0.165356,-0.141734 -0.330713,-0.295279 -0.484258,-0.448824 -5.16148,-4.74809 -7.99616,-11.1143 -8.42136,-17.6459 -0.448824,-6.72056 1.65356,-13.6301 6.37803,-19.1577l3.64965 -4.28745c-4.08666,3.1772 -8.92924,5.04337 -13.8781,5.51582 -6.62607,0.625992 -13.4529,-1.24017 -18.9687,-5.79928l-0.0118112 0c-0.141734,-0.118112 -0.283468,-0.248035 -0.425202,-0.377957l-0.0236223 -0.0236223c-5.24416,-4.55911 -8.30325,-10.8545 -8.94105,-17.3506 -0.649614,-6.5552 1.15749,-13.323 5.63393,-18.7443l0 0c0.118112,-0.153545 0.248035,-0.295279 0.377957,-0.425202l0.0118112 -0.0118112 4.84258 -5.58668 -29.0319 -30.0476 -11.8112 20.2916 -0.0354335 0.070867 -0.165356 0.271657 -0.070867 0.0826782c-3.9095,6.42528 -10.0749,10.6419 -16.8782,12.2836 -6.74418,1.62994 -14.138,0.755915 -20.516,-2.9646l-0.070867 -0.070867 -0.283468 -0.165356 -0.0826782 -0.0472447 -37.3587 -22.6538c-6.51977,-3.95674 -10.7718,-10.1576 -12.449,-17.0081 -1.67719,-6.82686 -0.779537,-14.3151 3.01185,-20.8231l118.395 -203.341 0.0354335 -0.0826782 0.165356 -0.271657 0.070867 -0.070867c3.89769,-6.43709 10.0749,-10.6419 16.8782,-12.2836 6.74418,-1.62994 14.1262,-0.755915 20.516,2.9646l0.070867 0.0354335 0.283468 0.165356 0.070867 0.070867 37.3705 22.6656c6.50795,3.94493 10.7718,10.1458 12.449,16.9963 1.66537,6.83867 0.767726,14.3151 -3.02366,20.8349l-16.89 29.02c10.1458,4.8662 17.953,8.30325 25.7129,10.6655 9.33082,2.84649 19.3585,4.42919 34.3469,5.49219l-0.0354335 0.377957c35.7997,-38.8587 76.7017,-35.8233 184.526,-27.8153l5.16148 0.389769 -7.01583 -12.0592c-3.79139,-6.50795 -4.68903,-13.9962 -3.02366,-20.8231 1.67719,-6.85048 5.94102,-13.0513 12.449,-17.0081l37.3705 -22.6538 0.070867 -0.0826782 0.283468 -0.165356 0.070867 -0.0354335c6.38984,-3.72052 13.7718,-4.59454 20.516,-2.9646 6.80323,1.64175 12.9805,5.85834 16.8782,12.2836l0.070867 0.0826782 0.165356 0.271657 0.0354335 0.070867 118.395 203.341c3.79139,6.51977 4.68903,13.9962 3.01185,20.8231 -1.67719,6.86229 -5.92921,13.0513 -12.449,17.0081l-37.3587 22.6656 -0.0826782 0.0354335 -0.283468 0.165356 -0.070867 0.070867c-6.37803,3.72052 -13.7718,4.59454 -20.516,2.9646 -6.80323,-1.64175 -12.9687,-5.84653 -16.8782,-12.2836l-0.070867 -0.070867 -0.165356 -0.271657 -0.0354335 -0.0826782 -12.1655 -20.894 -24.9806 18.8979c4.48824,7.88986 6.25992,16.76 5.65755,25.4058 -0.460636,6.83867 -2.40948,13.5828 -5.65755,19.5947 -3.2835,6.08275 -7.92529,11.4686 -13.7482,15.5435 -5.90558,4.1221 -12.9214,6.85048 -20.8585,7.55915 -2.66932,7.47647 -7.09851,13.8427 -13.2758,19.1105 -6.75599,5.75204 -15.4844,10.0277 -26.1972,12.8151 -2.33861,8.4568 -6.0237,15.5435 -11.1497,21.142 -6.54339,7.14576 -15.1301,11.634 -25.9373,13.2285l-4.50006 1.05119c-29.8468,45.7447 -66.615,23.0908 -99.2611,2.97641 -3.10634,-1.91341 -6.17724,-3.8032 -9.14184,-5.56306zm-217.928 -146.636l118.336 -203.27c1.22836,-2.1142 1.52364,-4.51187 0.992138,-6.69693 -0.50788,-2.06695 -1.78349,-3.94493 -3.72052,-5.11424l-37.2879 -22.6184 -0.0118112 0.0236223 -0.283468 -0.165356 0.0118112 0c-1.98428,-1.12206 -4.25202,-1.39372 -6.31898,-0.885838 -2.0079,0.484258 -3.81501,1.67719 -4.93707,3.47248l0.0236223 0.0118112 -0.165356 0.271657 0 0 -118.348 203.258c-1.22836,2.1142 -1.52364,4.52368 -0.992138,6.69693 0.50788,2.07877 1.78349,3.94493 3.73233,5.12605l37.3705 22.6656 -0.0118112 0 0.129923 0.070867 0.0118112 -0.0236223c1.98428,1.16931 4.28745,1.44096 6.37803,0.933082 2.0079,-0.484258 3.81501,-1.67719 4.93707,-3.47248l-0.0118112 -0.0118112 0.153545 -0.271657 0.0118112 0zm392.485 -171.238c0.732292,0.755915 1.32285,1.62994 1.77168,2.58665l9.42531 16.6301 92.0326 158.092 0.0118112 0 0.153545 0.271657 -0.0118112 0.0118112c1.12206,1.7953 2.92917,2.98823 4.93707,3.47248 2.09058,0.50788 4.39375,0.236223 6.37803,-0.921271l0.0118112 0.0236223 0.129923 -0.0826782 -0.0118112 0 37.3705 -22.6656c1.94884,-1.16931 3.22445,-3.04728 3.73233,-5.11424 0.531503,-2.18507 0.236223,-4.59454 -0.992138,-6.69693l-118.348 -203.27 0 0 -0.165356 -0.271657 0.0236223 -0.0118112c-1.12206,-1.7953 -2.92917,-2.98823 -4.93707,-3.47248 -2.06695,-0.496069 -4.3347,-0.236223 -6.31898,0.885838l0.0118112 0 -0.283468 0.177168 -0.0118112 -0.0236223 -37.2879 22.6066c-1.93703,1.18112 -3.21264,3.04728 -3.72052,5.12605 -0.531503,2.17326 -0.236223,4.58273 0.992138,6.69693l15.1065 25.9491zm-335.366 200.802l0 0 0 0zm58.7724 -7.52371l0.0118112 0 -0.0118112 0z"
                />
              </g>
            </svg>
          }
        />
        <AnimatedCounter
          start={0}
          end={1000}
          label="Project Experience"
          description="Extensive training and hands-on experience to ensure seamless flow of project execution"
          unit="+ Hours"
          image={
            <svg
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 122.88 100.54"
              style={{ enableBackground: "new 0 0 122.88 100.54" }}
              xmlSpace="preserve"
            >
              <g>
                <path d="M65.98,54.6H56.9c-0.15,0-0.27,0.06-0.37,0.15c-0.1,0.1-0.15,0.23-0.15,0.37v19.14c0,0.15,0.06,0.27,0.15,0.37c0.1,0.1,0.23,0.15,0.37,0.15h9.07c0.15,0,0.27-0.06,0.37-0.15c0.1-0.1,0.15-0.23,0.15-0.37V55.12c0-0.15-0.06-0.27-0.15-0.37C66.25,54.64,66.12,54.6,65.98,54.6L65.98,54.6L65.98,54.6z M6.98,13.97h31.49V4.94c0-1.37,0.56-2.6,1.45-3.49C40.82,0.56,42.06,0,43.41,0h36.06c1.37,0,2.59,0.56,3.49,1.45c0.89,0.89,1.45,2.14,1.45,3.49v9.03h31.49c1.93,0,3.67,0.79,4.92,2.06c1.27,1.27,2.06,3.01,2.06,4.92v16.86c-7.89,5.41-16.03,10.02-24.42,13.78c-8.44,3.78-17.14,6.71-26.14,8.73v-6.74c0-1.54-0.63-2.96-1.64-3.98c-1.01-1.01-2.43-1.64-3.98-1.64H56.17l0,0c-1.54,0-2.96,0.63-3.98,1.64c-1.01,1.01-1.64,2.43-1.64,3.98v6.59c-8.76-2.01-17.25-4.89-25.48-8.58C16.45,47.73,8.1,42.96,0,37.36V20.95c0-1.93,0.79-3.67,2.06-4.92C3.32,14.76,5.07,13.97,6.98,13.97L6.98,13.97L6.98,13.97z M122.88,47.81v45.76c0,1.93-0.79,3.67-2.06,4.92c-1.27,1.27-3.01,2.06-4.92,2.06H6.98c-1.93,0-3.67-0.79-4.92-2.06C0.79,97.22,0,95.48,0,93.57V47.39c6.89,4.42,13.98,8.28,21.27,11.55c9.41,4.22,19.17,7.45,29.29,9.61v7.25c0,1.54,0.63,2.96,1.64,3.98c1.01,1.01,2.44,1.64,3.98,1.64h10.53c1.54,0,2.96-0.63,3.98-1.64c1.01-1.01,1.64-2.43,1.64-3.98v-7.6l0.11,0.46c10.31-2.17,20.25-5.43,29.83-9.73C109.33,55.77,116.2,52.05,122.88,47.81L122.88,47.81z M75.71,6.73H47.19c-0.17,0-0.31,0.06-0.44,0.19c-0.1,0.1-0.19,0.27-0.19,0.44v6.42h29.75V7.36c0-0.17-0.06-0.31-0.19-0.44c-0.1-0.1-0.27-0.19-0.44-0.19H75.71L75.71,6.73z" />
              </g>
            </svg>
          }
        />
      </section>
    </div>
  );
};

export default Numbers;
