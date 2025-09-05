/**
 * astro-mvp.js
 * -----------------------------------------------------------------------------
 * PURPOSE (for non-techies):
 *  - Listens to the "Horoscope MVP" form on the page.
 *  - Reads your birth date, time, and location inputs.
 *  - Computes a *basic* Sun sign using civil calendar date ranges (no ephemeris).
 *  - Outputs 1–2 neutral, computed facts to demonstrate "inputs → rules → outputs".
 *
 * LIMITATIONS (by design for this MVP):
 *  - Uses the standard 12 tropical signs with fixed date boundaries.
 *  - Does NOT adjust for time zone, leap seconds, or sub-day solar ingress times.
 *  - Accuracy near sign boundaries can vary by a day. We note "cusp proximity".
 *
 * ARCHITECTURE NOTES (for future expansion):
 *  - Keep pure functions (e.g., date → sign) separate from DOM code.
 *  - Future: swap fixed boundaries for an ephemeris-backed calculation.
 *  - Future: add rules for Ascendant, Moon, houses, aspects as independent modules.
 */

// ---------- Pure helpers (no DOM) -------------------------------------------

/**
 * Returns an object for the zodiac sign given a month (1-12) and day (1-31).
 * Uses common tropical date boundaries (inclusive).
 */
function getSunSign(month, day) {
  // Month is 1-12. Day is 1-31.
  // We check in calendar order. For Capricorn (Dec 22–Jan 19), we test at end.
  if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) return makeSign("Aries", "Fire", "Cardinal");
  if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) return makeSign("Taurus", "Earth", "Fixed");
  if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) return makeSign("Gemini", "Air", "Mutable");
  if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) return makeSign("Cancer", "Water", "Cardinal");
  if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) return makeSign("Leo", "Fire", "Fixed");
  if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) return makeSign("Virgo", "Earth", "Mutable");
  if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) return makeSign("Libra", "Air", "Cardinal");
  if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) return makeSign("Scorpio", "Water", "Fixed");
  if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) return makeSign("Sagittarius", "Fire", "Mutable");
  if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) return makeSign("Aquarius", "Air", "Fixed");
  if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) return makeSign("Pisces", "Water", "Mutable");
  // Capricorn (Dec 22–Jan 19) as the remaining range:
  return makeSign("Capricorn", "Earth", "Cardinal");
}

function makeSign(name, element, modality) {
  return { name, element, modality };
}

/**
 * Returns true if (month, day) is within `windowDays` of any sign boundary.
 * This is a heuristic to warn users about boundary accuracy limits.
 */
function isNearCusp(month, day, windowDays = 1) {
  // Boundaries (month, day): Aries 3/21, Taurus 4/20, Gemini 5/21, Cancer 6/21,
  // Leo 7/23, Virgo 8/23, Libra 9/23, Scorpio 10/23, Sagittarius 11/22,
  // Capricorn 12/22, Aquarius 1/20, Pisces 2/19.
  const boundaries = [
    [3, 21], [4, 20], [5, 21], [6, 21], [7, 23], [8, 23],
    [9, 23], [10, 23], [11, 22], [12, 22], [1, 20], [2, 19],
  ];

  // Convert month/day to "day of year" with a simple non-leap table.
  const doy = dayOfYear(month, day);
  const boundaryDoys = boundaries.map(([m, d]) => dayOfYear(m, d));

  // Check minimal circular distance on a 365-day ring
  return boundaryDoys.some(b => {
    const diff = Math.abs(doy - b);
    const circ = Math.min(diff, 365 - diff);
    return circ <= windowDays;
  });
}

function dayOfYear(month, day) {
  const daysBeforeMonth = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334]; // non-leap
  return daysBeforeMonth[month - 1] + day;
}

/**
 * Returns a neutral, single-paragraph description for a sign using
 * element + modality as an "engineering framing" (traits as parameters).
 */
function describeSign(sign) {
  const { name, element, modality } = sign;
  return [
    `${name} (Element: ${element}, Modality: ${modality}).`,
    `In this MVP, the Sun sign is derived from the civil calendar date only.`,
    `This demonstrates how structured inputs map to rule-based outputs using simple branching logic.`,
  ].join(" ");
}

// ---------- DOM wiring -------------------------------------------------------

(function init() {
  const form = document.getElementById("astro-mvp-form");
  const output = document.getElementById("astro-mvp-output");
  const status = document.getElementById("astro-mvp-status");

  if (!form || !output) return; // If shortcode isn't on this page, do nothing.

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    status.textContent = "";
    output.innerHTML = "";

    const fd = new FormData(form);
    const dateStr = fd.get("birth_date");  // yyyy-mm-dd
    const timeStr = fd.get("birth_time");  // hh:mm (optional)
    const locStr  = fd.get("birth_location"); // free text (optional)

    // Basic validation for date
    if (!dateStr) {
      status.textContent = "Please enter a valid birth date.";
      return;
    }

    // Parse month/day from the ISO date string
    const [y, m, d] = dateStr.split("-").map(Number);
    if (!m || !d) {
      status.textContent = "Date format should be YYYY-MM-DD.";
      return;
    }

    // Compute Sun sign
    const sign = getSunSign(m, d);
    const desc = describeSign(sign);

    // Optional "cusp" note if near a sign boundary
    const cuspNote = isNearCusp(m, d)
      ? `<div class="astro-mvp-note">Note: this date is within ~1 day of a sign boundary. A higher-precision calculation (ephemeris + time zone) can refine this.</div>`
      : "";

    // Build output HTML
    const facts = [
      `<li><strong>Computed Sun sign:</strong> ${sign.name}</li>`,
      `<li><strong>Why this result:</strong> the date ${dateStr} falls within the standard ${sign.name} range by calendar.</li>`,
    ].join("");

    const optionalMeta = [
      timeStr ? `<li><strong>Entered time:</strong> ${timeStr}</li>` : "",
      locStr  ? `<li><strong>Entered location:</strong> ${escapeHtml(locStr)}</li>` : "",
    ].filter(Boolean).join("");

    output.innerHTML = `
      <div class="astro-mvp-result">
        <p>${desc}</p>
        <ul>${facts}${optionalMeta}</ul>
        ${cuspNote}
        <p class="astro-mvp-disclaimer">This MVP intentionally uses simplified logic for clarity and demonstration.</p>
      </div>
    `;

    status.textContent = "Done.";
  });
})();

// ---------- Small utility ----------------------------------------------------

function escapeHtml(str) {
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
