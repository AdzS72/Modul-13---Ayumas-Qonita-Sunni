import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
class Body extends React.Component {
  render() {
    return (
      <div class="container">
        <table class="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Subtitle</th>
              <th>ISBN13</th>
              <th>Price</th>
              <th>Image</th>
              <th>URL</th>
            </tr>
          </thead>
          <tbody id="bookId">
            <tr>
              <td>Deno Succinctly</td>
              <td></td>
              <td>9781642002140</td>
              <td>$0.00</td>
              <td>
                <img src="https://itbook.store/img/books/9781642002140.png" />
              </td>
              <td>
                <a href="https://itbook.store/books/9781642002140">link</a>
              </td>
            </tr>
            <tr>
              <td>Robotics, AI, and Humanity</td>
              <td>Science, Ethics, and Policy</td>
              <td>9783030541729</td>
              <td>$59.99</td>
              <td>
                <img src="https://itbook.store/img/books/9783030541729.png" />
              </td>
              <td>
                <a href="https://itbook.store/books/9783030541729">link</a>
              </td>
            </tr>
            <tr>
              <td>Introduction to Autonomous Robots, 3rd Edition</td>
              <td></td>
              <td>9781493773077</td>
              <td>$20.99</td>
              <td>
                <img src="https://itbook.store/img/books/9781493773077.png" />
              </td>
              <td>
                <a href="https://itbook.store/books/9781493773077">link</a>
              </td>
            </tr>
            <tr>
              <td>Learning Go</td>
              <td>An Idiomatic Approach to Real-World Go Programming</td>
              <td>9781492077213</td>
              <td>$35.88</td>
              <td>
                <img src="https://itbook.store/img/books/9781492077213.png" />
              </td>
              <td>
                <a href="https://itbook.store/books/9781492077213">link</a>
              </td>
            </tr>
            <tr>
              <td>Open Workbook of Cryptology</td>
              <td>A project-based introduction to crypto in Python</td>
              <td>1001656678502</td>
              <td>$0.00</td>
              <td>
                <img src="https://itbook.store/img/books/1001656678502.png" />
              </td>
              <td>
                <a href="https://itbook.store/books/1001656678502">link</a>
              </td>
            </tr>
            <tr>
              <td>Embracing Modern C++ Safely</td>
              <td></td>
              <td>9780137380350</td>
              <td>$44.87</td>
              <td>
                <img src="https://itbook.store/img/books/9780137380350.png" />
              </td>
              <td>
                <a href="https://itbook.store/books/9780137380350">link</a>
              </td>
            </tr>
            <tr>
              <td>Retro Gaming with Raspberry Pi, 2nd Edition</td>
              <td></td>
              <td>1001656317756</td>
              <td>$0.00</td>
              <td>
                <img src="https://itbook.store/img/books/1001656317756.png" />
              </td>
              <td>
                <a href="https://itbook.store/books/1001656317756">link</a>
              </td>
            </tr>
            <tr>
              <td>Debugging with GDB</td>
              <td>The GNU Source-Level Debugger</td>
              <td>9780983159230</td>
              <td>$65.00</td>
              <td>
                <img src="https://itbook.store/img/books/9780983159230.png" />
              </td>
              <td>
                <a href="https://itbook.store/books/9780983159230">link</a>
              </td>
            </tr>
            <tr>
              <td>Grokking Machine Learning</td>
              <td></td>
              <td>9781617295911</td>
              <td>$49.49</td>
              <td>
                <img src="https://itbook.store/img/books/9781617295911.png" />
              </td>
              <td>
                <a href="https://itbook.store/books/9781617295911">link</a>
              </td>
            </tr>
            <tr>
              <td>Functional Programming in Kotlin</td>
              <td></td>
              <td>9781617297168</td>
              <td>$18.63</td>
              <td>
                <img src="https://itbook.store/img/books/9781617297168.png" />
              </td>
              <td>
                <a href="https://itbook.store/books/9781617297168">link</a>
              </td>
            </tr>
            <tr>
              <td>Kubernetes Native Microservices with Quarkus and MicroProfile</td>
              <td></td>
              <td>9781617298653</td>
              <td>$45.30</td>
              <td>
                <img src="https://itbook.store/img/books/9781617298653.png" />
              </td>
              <td>
                <a href="https://itbook.store/books/9781617298653">link</a>
              </td>
            </tr>
            <tr>
              <td>How to Lead in Data Science</td>
              <td></td>
              <td>9781617298899</td>
              <td>$43.49</td>
              <td>
                <img src="https://itbook.store/img/books/9781617298899.png" />
              </td>
              <td>
                <a href="https://itbook.store/books/9781617298899">link</a>
              </td>
            </tr>
            <tr>
              <td>Functional Programming in C#, 2nd Edition</td>
              <td></td>
              <td>9781617299827</td>
              <td>$53.99</td>
              <td>
                <img src="https://itbook.store/img/books/9781617299827.png" />
              </td>
              <td>
                <a href="https://itbook.store/books/9781617299827">link</a>
              </td>
            </tr>
            <tr>
              <td>Azure Pipelines Succinctly</td>
              <td></td>
              <td>9781642002133</td>
              <td>$0.00</td>
              <td>
                <img src="https://itbook.store/img/books/9781642002133.png" />
              </td>
              <td>
                <a href="https://itbook.store/books/9781642002133">link</a>
              </td>
            </tr>
            <tr>
              <td>Microsoft Excel Inside Out</td>
              <td>Office 2021 and Microsoft 365</td>
              <td>9780137559534</td>
              <td>$42.16</td>
              <td>
                <img src="https://itbook.store/img/books/9780137559534.png" />
              </td>
              <td>
                <a href="https://itbook.store/books/9780137559534">link</a>
              </td>
            </tr>
            <tr>
              <td>Windows Internals, Part 2, 7th Edition</td>
              <td></td>
              <td>9780135462409</td>
              <td>$53.49</td>
              <td>
                <img src="https://itbook.store/img/books/9780135462409.png" />
              </td>
              <td>
                <a href="https://itbook.store/books/9780135462409">link</a>
              </td>
            </tr>
            <tr>
              <td>Microsoft Office Inside Out</td>
              <td>Office 2021 and Microsoft 365</td>
              <td>9780137564095</td>
              <td>$36.93</td>
              <td>
                <img src="https://itbook.store/img/books/9780137564095.png" />
              </td>
              <td>
                <a href="https://itbook.store/books/9780137564095">link</a>
              </td>
            </tr>
            <tr>
              <td>Microsoft Excel Step by Step</td>
              <td>Office 2021 and Microsoft 365</td>
              <td>9780137564279</td>
              <td>$30.32</td>
              <td>
                <img src="https://itbook.store/img/books/9780137564279.png" />
              </td>
              <td>
                <a href="https://itbook.store/books/9780137564279">link</a>
              </td>
            </tr>
            <tr>
              <td>Microsoft Excel Data Analysis and Business Modeling, 7th Edition</td>
              <td>Office 2021 and Microsoft 365</td>
              <td>9780137613663</td>
              <td>$34.87</td>
              <td>
                <img src="https://itbook.store/img/books/9780137613663.png" />
              </td>
              <td>
                <a href="https://itbook.store/books/9780137613663">link</a>
              </td>
            </tr>
            <tr>
              <td>Intermediate Statistics with R</td>
              <td></td>
              <td>1001651662833</td>
              <td>$0.00</td>
              <td>
                <img src="https://itbook.store/img/books/1001651662833.png" />
              </td>
              <td>
                <a href="https://itbook.store/books/1001651662833">link</a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
export default Body;
