# Sorting Visualizer

A vanilla JavaScript web application that visually demonstrates how the Bubble Sort algorithm works step-by-step. By generating a random array of numbers and rendering each comparison and swap to the DOM, this project helps solidify the understanding of basic sorting mechanics.

## 🚀 Features

*   **Random Array Generation:** Generates a fresh array of 5 random numbers (between 1 and 100) at the click of a button.
*   **Step-by-Step Visualization:** Instead of sorting instantly, the app appends a new row to the screen for every iteration, allowing you to trace the algorithm's exact path.
*   **Visual Cues:** 
    *   **Dark Blue Border:** Indicates the starting, unsorted array.
    *   **Dashed Red Border:** Highlights the two specific elements currently being compared or swapped in real-time.
    *   **Solid Green Border:** Confirms the final, successfully sorted array.
*   **Optimized Algorithm:** The underlying Bubble Sort logic includes a `swapped` flag to break the loop early if the array is sorted before reaching the maximum number of passes.

## 🔗 Live Preview

**[Click here to view the Live Preview of the RPG Creature Search App](https://lowkeyelonmusk.github.io/sorting-visualizer/)** 

## 🛠️ Technologies Used

*   **HTML5:** Clean, semantic container structures for the visualization board and control buttons.
*   **CSS3:** Flexbox layout, responsive media queries, and dynamic border styling for active state indication.
*   **JavaScript (ES6+):**
    *   DOM Manipulation (`createElement`, `appendChild`, `innerHTML`)
    *   Event Handling
    *   Array mapping and mutation
    *   Algorithmic logic (Bubble Sort)

## 📂 Project Structure

```text
├── index.html   # HTML layout and visualization containers
├── styles.css   # Visual styling, Flexbox layout, and state classes
├── script.js    # Array generation, DOM rendering, and sorting logic
└── readme.md    # Documentation and usage guide
```

## 💻 Getting Started

To run this project locally:

1. Clone or download this repository to your local computer.
2. Ensure `index.html`, `visualizer.css`, and `visualizer.js` are in the same folder.
3. Open `index.html` in your web browser.
4. Click **Generate Array** to create a new set of random numbers.
5. Click **Sort Array** to watch the Bubble Sort algorithm process the numbers step-by-step.