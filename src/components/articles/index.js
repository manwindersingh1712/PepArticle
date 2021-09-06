import pattern from "../../assets/images/pattern.png";
import sum_of_two_arrays_1 from "../../assets/images/sum_of_two_arrays_1.png";
import sum_of_two_arrays_2 from "../../assets/images/sum_of_two_arrays_2.png";
import sum_of_two_arrays_3 from "../../assets/images/sum_of_two_arrays_3.png";

import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/theme-xcode";
import { useEffect, useState } from "react";
import Tooltip from "../../assets/common/tooltip";

const Articles = () => {
  const [size, setfontsize] = useState(17);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImg, setModalImg] = useState(sum_of_two_arrays_1);
  const [showQ, setShowQ] = useState(false);
  const code = `import java.io.*;
    import java.util.*;
    
    public class Main {
    
      public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    
        int n1 = 5;
        int[] a1 = new int[]{ 3, 1, 0, 7, 5 };
        int n2 = 6;
        int[] a2 = new int[]{ 1, 1, 1, 1, 1, 1 };
    
        int[] sum = new int[n1 > n2 ? n1 : n2];
        int i = n1 - 1;
        int j = n2 - 1;
        int k = sum.length - 1;
        int c = 0;
        while (i >= 0 || j >= 0) {
          int d = c;
    
          if (i >= 0)
            d += a1[i];
    
          if (j >= 0)
            d += a2[j];
    
          c = d / 10;
          d = d % 10;
          sum[k] = d;
    
          i--;
          j--;
          k--;
        }
    
        if (c > 0) {
          System.out.println(c);
        }
        for (int val : sum) {
          System.out.println(val);
        }
      }
    
    }
            `;
  const openModal = (image) => {
    document.body.style.overflow = "hidden";
    setIsModalOpen(true);
    setModalImg(image);
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset >= 845) {
        setShowQ(true);
      } else {
        setShowQ(false);
      }
    });
  }, []);

  return (
    <>
      <div
        className="md:container m-auto relative z-0"
        data-aos="fade-up"
        data-aos-duration="1200"
      >
        <div style={{ height: "calc(100vh - 120px)" }}>
          <div className="flex items-center mt-16">
            <div className="text-center text-3xl w-full md:text-left md:flex md:flex-1 md:text-6xl text-gray-800 md:ml-48 md:mt-12">
              Sum Of Two Arrays
            </div>
            <div className="hidden md:block">
              <img src={pattern} alt="pattern" />
            </div>
          </div>

          <div className="m-auto hidden md:flex">
            <div
              className="h-8 w-28 rounded-full"
              style={{ backgroundColor: "rgb(254,122,122)" }}
            ></div>
            <div
              className="h-8 rounded-full ml-8"
              style={{ backgroundColor: "rgb(220,220,220)", width: "600px" }}
            ></div>
          </div>

          <div className="left-1/2 -ml-6 absolute bottom-28 md:left-20 flex">
            <div className="text-5xl md:text-7xl animate-bounce">
              <i
                className="fas fa-chevron-down"
                style={{ color: "rgb(254,122,122)" }}
              ></i>
            </div>
          </div>
          <div className="md:absolute bottom-28 right-0 md:flex md:flex-col">
            <div
              className="text-center text-xl mt-40 md:mt-0 md:text-5xl mb-12"
              style={{ fontFamily: "'Parisienne', cursive" }}
            >
              Life is full of risks anyway; why not take them?
            </div>
            <div
              className="hidden md:flex self-end h-6 w-3/5 rounded-full"
              style={{ backgroundColor: "rgb(254,122,122)" }}
            ></div>
          </div>
        </div>
      </div>

      <div
        className="w-4/5 md:container mx-auto md:px-32"
        data-aos="fade-up"
        data-aos-duration="1200"
      >
        <hr className="h-1 bg-gray-300 rounded-full md:mt-28" />
        <div className="mulish text-base md:leading-9 md:text-2xl font-medium mt-3 md:mt-6">
          Hey coder ! We are here to help you and be your coding buddy. Let’s go
          through the step by step explanation of this question together. This
          is going to be one hell of a ride!
        </div>
        <div className="spartan text-xl md:text-4xl my-5 md:my-20 font-semibold">
          PROBLEM DISCUSSION:
        </div>
        <div className="mulish text-base md:leading-9 md:text-2xl font-medium mt-3 md:mt-6">
          Let us guide you through the given problem.
        </div>
        <div className="mulish text-base md:leading-9 md:text-2xl font-medium mt-3 md:mt-6">
          You are given 2 numbers in the form of arrays.
        </div>
        <div className="mulish text-base md:leading-9 md:text-2xl font-medium mt-3 md:mt-6">
          Now we know what mischief must be cooking in your mind. No, converting
          arrays into numbers and adding them is not possible as the length of
          arrays can be very lengthy.
        </div>
        <div className="mulish text-base md:leading-9 md:text-2xl font-medium mt-3 md:mt-6">
          Reader, suppose we are given the following input : 31075 and 111111 ,
          then notice the places of the digits when adding :
        </div>
        <div className="flex justify-center my-8">
          <img
            src={sum_of_two_arrays_1}
            alt="sum_of_two_arrays_1"
            style={{ cursor: "zoom-in" }}
            onClick={() => openModal(sum_of_two_arrays_1)}
          />
        </div>
        <div className="mulish text-base md:leading-9 md:text-2xl font-medium mt-3 md:mt-6">
          We also suggest you watch the question video to understand it better.
        </div>
        <div className="flex justify-center my-8">
          <iframe
            className="rounded-xl"
            width="560"
            height="315"
            src="https://www.youtube-nocookie.com/embed/aSb29e8OoZs?start=1"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay;  encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="spartan text-xl md:text-4xl my-5 md:my-20 font-semibold">
          Approach:
        </div>
        <div className="mulish text-base md:leading-9 md:text-2xl font-medium mt-3 md:mt-6">
          For the explanation we take the two numbers as 93468 and 1988 .We
          declare a new array (say sum[ ]) whose length is the larger of the two
          input array lengths.
        </div>
        <div className="flex justify-center my-8">
          <img
            src={sum_of_two_arrays_2}
            alt="sum_of_two_arrays_2"
            style={{ cursor: "zoom-in" }}
            onClick={() => openModal(sum_of_two_arrays_2)}
          />
        </div>
        <div className="mulish text-base md:leading-9 md:text-2xl font-medium mt-3 md:mt-6">
          We put pointers i ,j and k and the last place of all the arrays.
        </div>
        <div className="mulish text-base md:leading-9 md:text-2xl font-medium mt-3 md:mt-6">
          In the first iteration, we add the values at i and j and store (i + j)
          %10 in k. Then we take (i + j) / 10 in carry (denoted by "c") and
          decrease i , j and k by one place for all the subsequent iterations as
          follows:
        </div>
        <div className="flex justify-center my-8">
          <img
            src={sum_of_two_arrays_3}
            alt="sum_of_two_arrays_3"
            style={{ cursor: "zoom-in" }}
            onClick={() => openModal(sum_of_two_arrays_3)}
          />
        </div>
        <div className="mulish text-base md:leading-9 md:text-2xl font-medium mt-3 md:mt-6">
          When j pointer reaches -1 position , we add only value at i and value
          of carry and store it in the kth position of the sum array.
        </div>
        <div className="mulish text-base md:leading-9 md:text-2xl font-medium mt-3 md:mt-6">
          Now reader, in case the carry at last position of i (i.e at 9) was 1 ,
          then the sum would have been 10. So, in such a case we print "1" by
          itself, store "0" at kth position and then print the entire sum array.
        </div>
        <div className="mulish text-base md:leading-9 md:text-2xl font-medium mt-3 md:mt-6">
          We highly recommend you to refer to video of Sum of two arrays for
          detailed explanation .
        </div>
        <div className="flex justify-center my-8">
          <iframe
            className="rounded-xl"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/BzJK1zNXwcU"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="spartan text-xl md:text-4xl my-5 md:my-20 font-semibold">
          Code:
        </div>
        <div
          className="w-full h-8 flex items-center justify-between"
          style={{ border: "1px solid rgb(225,240,250)" }}
        >
          <div className="ibm font-bold ml-2">Java</div>
          <select
            className="ibm font-bold ml-6"
            value={size}
            onChange={(e) => {
              setfontsize(e.target.value);
            }}
          >
            <option value={17}>17px</option>
            <option value={16}>16px</option>
            <option value={15}>15px</option>
            <option value={14}>14px</option>
          </select>
        </div>
        <AceEditor
          value={code}
          mode="java"
          theme="xcode"
          fontSize={size}
          readOnly={true}
          width="100"
          highlightActiveLine={false}
        />
        <div
          className="w-full h-8 flex items-center justify-end"
          style={{ backgroundColor: "rgb(225,240,250)" }}
        >
          <div className="ibm font-bold cursor-pointer hover:bg-gray-900 p-1 hover:text-white">
            Run
            <i className="fas fa-chevron-right mx-2"></i>
          </div>
        </div>
        <div className="spartan text-xl md:text-4xl my-5 md:my-20 font-semibold">
          TIME & SPACE COMPLEXITY:
        </div>
        <div className="mulish text-base md:leading-9 md:text-2xl mt-6 font-extrabold">
          TIME COMPLEXITY:
        </div>
        <div className="mulish text-base md:leading-9 md:text-2xl mt-6 font-semibold">
          O(n)
        </div>
        <div className="mulish text-base md:leading-9 md:text-2xl mt-6 font-extrabold">
          SPACE COMPLEXITY:
        </div>
        <div className="mulish text-base md:leading-9 md:text-2xl mt-6 font-semibold">
          O(n)
        </div>

        <div className="mulish text-base md:leading-9 md:text-2xl font-medium mt-3 md:mt-6">
          As a 1D array is used in the code, therefore space complexity is
          constant.
        </div>
        <div className="spartan text-xl md:text-4xl my-5 md:my-20 font-semibold">
          Analysis:
        </div>
        <div className="mulish text-base md:leading-9 md:text-2xl font-medium mt-3 md:mt-6">
          Your patience has been much valued. Let's discuss the "WHY" aspect of
          this question now.
        </div>
        <div className="mulish text-base md:leading-9 md:text-2xl font-medium mt-3 md:mt-6">
          Be attentive ! The most important part of this article awaits you.
        </div>
        <ul>
          <li className="mulish text-base md:leading-9 md:text-2xl font-medium mt-3 md:mt-6 ml-10">
            1. Initial value of carry is kept 0 and it changes in each
            iteration.
          </li>
          <li className="mulish text-base md:leading-9 md:text-2xl font-medium mt-3 md:mt-6 ml-10">
            2. We iterate this code for k{">"}=0 so that all positions of sum[ ]
            are filled.
          </li>
          <li className="mulish text-base md:leading-9 md:text-2xl font-medium mt-3 md:mt-6 ml-10">
            3. Reader, here, "d" denotes the digit which is to be placed at kth
            position in sum[ ]. We initialize it with the value stored in carry.
          </li>
          <li className="mulish text-base md:leading-9 md:text-2xl font-medium mt-3 md:mt-6 ml-10">
            4. If i is at a non-negative position (i.e some part of the number
            is still left to be added) then the value at i is added to the
            previous value of "d".
          </li>
          <li className="mulish text-base md:leading-9 md:text-2xl font-medium mt-3 md:mt-6 ml-10">
            5. Similarly, if j is non-negative then the value of j is also added
            to the previous value of "d".
          </li>
          <li className="mulish text-base md:leading-9 md:text-2xl font-medium mt-3 md:mt-6 ml-10">
            6. As discussed previously , carry is updated as carry=d/10 and
            stores the ten's place value of "d" .
          </li>
          <li className="mulish text-base md:leading-9 md:text-2xl font-medium mt-3 md:mt-6 ml-10">
            7. Also the digit, "d" is updated to d=d%10 to store the one's place
            value of "d".
          </li>
          <li className="mulish text-base md:leading-9 md:text-2xl font-medium mt-3 md:mt-6 ml-10">
            8. You need to store "d" in the kth position of the sum[ ] array
            now.
          </li>
          <li className="mulish text-base md:leading-9 md:text-2xl font-medium mt-3 md:mt-6 ml-10">
            9. At last , decrement the values of i , j and k .
          </li>
        </ul>
        <div className="mulish text-base md:leading-9 md:text-2xl font-medium mt-3 md:mt-6">
          We can't stress you enough refer to the video .
        </div>
        {/* video */}
        <div className="flex justify-center my-8">
          <iframe
            className="rounded-xl"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/BzJK1zNXwcU?start=330"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>{" "}
        </div>
        <div className="mulish text-base md:leading-9 md:text-2xl font-medium mt-3 md:mt-6">
          With this you have completed the question of Sum of 2 Arrays . Don’t
          forget to keep revising the question. We’ll see you next time with a
          new question. Till then, Adios !
        </div>
        <div className="spartan text-xl md:text-4xl my-5 md:my-20 font-semibold">
          SOME RANDOM "GYAAN":
        </div>
        <ul>
          <li className="mulish text-base md:leading-9 md:text-2xl font-medium mt-3 md:mt-6 ml-10">
            1. Come back to the question next day if you reach any mind blocks.
          </li>
          <li className="mulish text-base md:leading-9 md:text-2xl font-medium mt-3 md:mt-6 ml-10">
            2. Correct way to attempt the questions to try them yourself first ,
            read the article and finally refer to the Youtube video.
          </li>
          <li className="mulish text-base md:leading-9 md:text-2xl font-medium mt-3 md:mt-6 ml-10">
            3. We believe in you, now you need to believe in yourself.
          </li>
        </ul>
        <div className="ibm text-base font-semibold w-max tag cursor-pointer mt-8 px-5 py-2">
          1D Arrays
        </div>
        <div className="mulish text-base md:leading-9 md:text-2xl font-bold my-16">
          Author: Shreeya Gupta
        </div>
      </div>

      {isModalOpen && (
        <div
          className="fixed top-0 left-0 flex justify-center items-center z-50 w-full h-screen  bg-red-50"
          style={{ backgroundColor: "rgba(254, 242, 242, 0.5)" }}
        >
          <div
            onClick={() => {
              document.body.style.overflow = "auto";
              setIsModalOpen(false);
            }}
            className="text-5xl fixed right-5 top-5 text-gray-300 cursor-pointer"
          >
            X
          </div>

          <img src={modalImg} alt="modal solution img" className="w-2/3" />
        </div>
      )}

      {showQ && (
        <div className="hidden md:block md:fixed bottom-32 left-10">
          <Tooltip text="Sum Of Two Arrays">
            <button className="w-max p-5 px-6 text-white bg-red-500 rounded-full">
              Q
            </button>
          </Tooltip>
        </div>
      )}
    </>
  );
};

export default Articles;
