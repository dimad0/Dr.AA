/* Adam W. Awerbuch, MD — site behavior (no dependencies) */
(function () {
  "use strict";

  document.documentElement.classList.remove("no-js");

  var header = document.querySelector(".site-header");
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("site-nav");

  /* ---- Mobile navigation ---- */
  function setHeaderOffset() {
    if (!header) return;
    var rect = header.getBoundingClientRect();
    document.documentElement.style.setProperty("--header-offset", Math.round(rect.bottom) + "px");
  }

  function setNav(open) {
    if (!toggle || !nav) return;
    if (open) setHeaderOffset();
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    nav.classList.toggle("is-open", open);
    document.body.classList.toggle("nav-open", open);
  }

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      setNav(toggle.getAttribute("aria-expanded") !== "true");
    });

    nav.addEventListener("click", function (event) {
      if (event.target.closest("a")) setNav(false);
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") {
        setNav(false);
        toggle.focus();
      }
    });

    window.matchMedia("(min-width: 961px)").addEventListener("change", function (mq) {
      if (mq.matches) setNav(false);
    });
  }

  /* ---- Header shadow on scroll ---- */
  if (header) {
    var onScroll = function () {
      header.classList.toggle("is-scrolled", window.scrollY > 8);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  /* ---- Footer year ---- */
  var year = String(new Date().getFullYear());
  document.querySelectorAll("[data-year]").forEach(function (el) {
    el.textContent = year;
  });

  /* ---- Reveal on scroll ---- */
  var revealEls = document.querySelectorAll(".reveal");
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (!("IntersectionObserver" in window) || reduceMotion) {
    revealEls.forEach(function (el) {
      el.classList.add("is-visible");
    });
  } else {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
    );
    revealEls.forEach(function (el) {
      observer.observe(el);
    });
  }

  /* ---- Appointment request form ----
     Set data-endpoint on the <form> to a form-handling service URL
     (ideally a HIPAA-compliant provider that will sign a BAA).
     Until then, the form validates input and asks visitors to call. */
  var form = document.querySelector(".request-form");
  if (!form) return;

  var status = form.querySelector(".form-status");
  var statusText = status ? status.querySelector("[data-status-text]") : null;
  var submitBtn = form.querySelector('[type="submit"]');

  function showStatus(message, tone) {
    if (!status || !statusText) return;
    statusText.innerHTML = message;
    status.classList.remove("notice--calm");
    if (tone === "calm") status.classList.add("notice--calm");
    status.classList.add("is-visible");
    status.setAttribute("tabindex", "-1");
    status.focus({ preventScroll: false });
  }

  function validateField(field) {
    var wrapper = field.closest(".field");
    if (!wrapper) return true;
    var valid = field.checkValidity();
    wrapper.classList.toggle("has-error", !valid);
    field.setAttribute("aria-invalid", String(!valid));
    return valid;
  }

  form.querySelectorAll("input, select, textarea").forEach(function (field) {
    field.addEventListener("blur", function () {
      if (field.value) validateField(field);
    });
    field.addEventListener("input", function () {
      var wrapper = field.closest(".field");
      if (wrapper && wrapper.classList.contains("has-error")) validateField(field);
    });
  });

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    var fields = form.querySelectorAll(".field input, .field select, .field textarea");
    var firstInvalid = null;
    fields.forEach(function (field) {
      if (!validateField(field) && !firstInvalid) firstInvalid = field;
    });

    if (firstInvalid) {
      firstInvalid.focus();
      return;
    }

    var honeypot = form.querySelector(".hp-field input");
    if (honeypot && honeypot.value) return;

    var phone = form.getAttribute("data-phone") || "";
    var phoneLink = phone
      ? ' <a href="tel:+1' + phone.replace(/\D/g, "") + '">' + phone + "</a>"
      : "";
    var email = form.getAttribute("data-email") || "";
    var emailLink = email ? ' <a href="mailto:' + email + '">' + email + "</a>" : "";
    var endpoint = (form.getAttribute("data-endpoint") || "").trim();

    if (!endpoint) {
      showStatus(
        "<strong>Thank you.</strong> Online requests are not yet being received. To schedule, please call the office at" +
          phoneLink +
          (emailLink ? " or email" + emailLink : "") +
          ".",
        "calm"
      );
      return;
    }

    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.dataset.label = submitBtn.textContent;
      submitBtn.textContent = "Sending…";
    }

    fetch(endpoint, {
      method: "POST",
      body: new FormData(form),
      headers: { Accept: "application/json" }
    })
      .then(function (response) {
        if (!response.ok) throw new Error("Request failed");
        form.reset();
        showStatus(
          "<strong>Thank you — your request has been sent.</strong> The office will contact you within one to two business days. If you need to reach us sooner, please call" +
            phoneLink +
            ".",
          "calm"
        );
      })
      .catch(function () {
        showStatus(
          "<strong>Sorry, something went wrong.</strong> Your request was not sent. Please try again or call the office at" +
            phoneLink +
            "."
        );
      })
      .then(function () {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.textContent = submitBtn.dataset.label || "Send request";
        }
      });
  });
})();
