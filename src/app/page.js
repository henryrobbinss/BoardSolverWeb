import bsLogo from "./image1.png";
import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image 
          src={bsLogo}
          alt="My Image Description" 
          width={300} // Specify width
          height={300} // Specify height
        />
        <h1>Board Solver Mobile</h1>

        <p>Board Solver Mobile (BSM) is a mobile application which leverages computer vision to solve for optimal next moves in common board games. BSM is built using an object detection model trained in <em>CreateML</em> based on <em>YOLOv2</em>. BSM currently supports Connect4 with future plans to add more!</p>

        <h2>Table of Contents</h2>
        <ul>
          <li><a href="#ProjectOverview">Project Overview</a></li>
          <li><a href="#Features">Features</a></li>
          <li><a href="#Requirements">Requirements</a></li>
          <li><a href="#Contributing">Contributing</a></li>
          <li><a href="#License">License</a></li>
          <li><a href="#Contributers">Contributors</a></li>
        </ul>

        <h2 id="ProjectOverview">Project Overview</h2>
        <p>Do you ever get stuck trying to decide on your next move in a board game? Board Solver Mobile (BSM), aims to be your assistant for strategic board games. Leveraging the power of computer vision, BSM analyzes game states through your iOS device's camera and suggests the next optimal move based on pre-trained algorithms.</p>

        <p>BSM currently supports the popular game of Connect4, with hopes to support more games in the future. For each game, BSM considers various factors like piece placement, potential threats, and strategic goals to recommend the move with the highest chance of success. The difficulty level of the solver currently only returns the best move, but we plan to make the difficulty of the opponent adjustable, allowing you to test your skills against a range of challenges.</p>

        <p>This project is a great tool for both casual and experienced board game players. Whether you're looking for a helping hand to improve your game or simply want to explore different strategic options, BSM can be your guide to becoming a board game champion!</p>

        <h2 id="Features">Features</h2>
        <ul>
          <li>Support for Connect4</li>
          <li>Pre-trained YOLOv2 model trained on custom data</li>
          <li>Support for iOS 17+</li>
        </ul>

        <h2 id="Requirements">Requirements</h2>
        <h4>Development Environment</h4>
        <ul>
          <li>Operating System: macOS (latest version recommended)</li>
          <li>Swift: [Current Swift version] (can be found at <a href="https://swiftversion.net/" target="_blank">https://swiftversion.net/</a>)</li>
          <li>Xcode: [Current Xcode version] (can be found at <a href="https://developer.apple.com/xcode/" target="_blank">https://developer.apple.com/xcode/</a>)</li>
        </ul>

        <h4>Hardware</h4>
        <ul>
          <li>Any Mac supporting most recent Xcode and Swift versions</li>
          <li>iPhone (any model supported by the current iOS version)</li>
        </ul>

        <h2 id="Contributing">Contributing</h2>
        <p>We welcome contributions from the community! Here's how you can get involved with this project:</p>

        <h4>Forking the Repository</h4>
        <p>Fork this repository by clicking the "Fork" button on GitHub. This creates your own copy of the codebase.</p>
        <p>Clone your forked repository to your local machine. You can use the following command in your terminal:</p>
        <pre><code>git clone https://github.com/henryrobbinss/BoardSolverMobile.git</code></pre>

        <h4>Making Changes</h4>
        <p>Create a new branch for your feature or bug fix. You can use a descriptive branch name that reflects your changes. For example:</p>
        <pre><code>git checkout -b fix/camera-permissions</code></pre>
        <p>Make your changes to the codebase.</p>
        <p>Commit your changes with a clear and concise commit message. A good commit message should describe what you changed and why.</p>
        <p>Push your changes to your forked repository on GitHub.</p>

        <h4>Submitting a Pull Request (PR)</h4>
        <p>Navigate to your forked repository on GitHub.</p>
        <p>Click on the "Pull requests" tab.</p>
        <p>Click the button to "Create pull request".</p>
        <p>In the pull request description, provide a detailed explanation of your changes and how they address any issues or improve the project.</p>
        <p>Select the branch you want to merge your changes into (usually the main branch).</p>
        <p>Click "Create pull request" to submit your contribution for review.</p>

        <h4>Review Process</h4>
        <p>We will review your pull request carefully. We may ask for clarifications or suggest modifications to your code. Please be patient and responsive during the review process.</p>

        <h4>Blessed Repo Format</h4>
        <p>This project follows the "blessed repo" contribution model. This means that only maintainers can directly push code to the main repository. However, your contributions are highly valued! By following these guidelines and submitting a pull request, you allow maintainers to review your code and integrate it into the main repository if it meets the project's standards.</p>

        <h4>Additional Notes</h4>
        <ul>
          <li>Before submitting a large pull request, consider creating a smaller, focused pull request for easier review.</li>
          <li>We recommend following the project's coding style guide (if one exists) to ensure consistency in the codebase.</li>
          <li>Feel free to ask questions or discuss your ideas by creating an issue on the project's GitHub repository.</li>
        </ul>
        <p>We appreciate your contribution to Board Solver Mobile!</p>

        <h2 id="License">License</h2>
        <p>This project is licensed under the GNU General Public License v2.0 (GPLv2). You can find a copy of the license <a href="https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html" target="_blank">here</a>. The GPLv2 grants you the freedom to use, modify, and distribute this software, while requiring you to share any modifications you make under the same license.</p>

        <h2 id="Contributers">Contributors</h2>
        <a href="https://github.com/henryrobbinss/BoardSolverMobile/graphs/contributors" target="_blank">
          <img src="https://contrib.rocks/image?repo=henryrobbinss/BoardSolverMobile" />
        </a>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        
      </footer>
    </div>
  );
}
