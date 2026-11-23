// footer year
// Citation: used code froom CodexWorld article, "Get Current Year to Display Dynamic Year in Copyright using JavaScript" www.codexworld.com/how-to/get-current-year-to-display-dynamic-year-in-copyright-using-javascript/

const yearElement = document.getElementById("year");
if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}

// AI content starts here
const levelForm = document.getElementById("level-form");

if (levelForm) {
  levelForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const degree = document.querySelector('input[name="degree"]:checked');
    const stage = document.querySelector('input[name="stage"]:checked');
    const error = document.getElementById("level-error");
    const result = document.getElementById("level-result");

    if (degree === null || stage === null) {
      error.hidden = false;
      result.hidden = true;
      return;
    }

    error.hidden = true;

    const levels = {
      first: {
        name: "Introductory",
        when: "in your first semester",
        match: "core required courses and foundational project labs"
      },
      middle: {
        name: "Intermediate",
        when: "in the middle of your program",
        match: "elective project courses and applied research units"
      },
      final: {
        name: "Advanced",
        when: "in your final year or semester",
        match: "capstones, client clinics, and Master's thesis labs"
      }
    };

    const level = levels[stage.value];

    result.innerHTML =
      "<h3>Your level: " + level.name + "</h3>" +
      "<p>As a " + degree.value + " student " + level.when +
      ", the " + level.name + " workshops are the best fit. " +
      "These often match " + level.match + ".</p>";
    result.hidden = false;
  });
}

// AI content ends here
// Workshop level finder (unique addition).
//    Structure adapted from SI 539 in-class JavaScript challenge week 12 discussion; Content taken & modified from Claude with the prompt, "I need help writing a form that is structured like this one {inputed discussion 12 code example}, please help me create the form in a structured way": and then edited parts to fit ELO" Anthropic. (2026). Claude (Claude Sonnet 5.5) [Large language model]. https://claude.ai. 