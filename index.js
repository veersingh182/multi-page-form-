const backBtn = document.getElementById("backBtn");
const nextBtn = document.getElementById("nextBtn");
const nameInput = document.getElementById("nameInput");
const emailInput = document.getElementById("emailInput");
const phoneNoInput = document.getElementById("phoneNoInput");
const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const phoneNoError = document.getElementById("phoneNoError");
const step1 = document.getElementById("step1");
const step2 = document.getElementById("step2");
const step3 = document.getElementById("step3");
const step4 = document.getElementById("step4");

const monthlyYearlyCheckbox = document.getElementById("monthlyYearlyCheckbox");
const monthly = document.getElementById("monthly");
const yearly = document.getElementById("yearly");

const stepNo1 = document.getElementById("stepNo-1");
const stepNo2 = document.getElementById("stepNo-2");
const stepNo3 = document.getElementById("stepNo-3");
const stepNo4 = document.getElementById("stepNo-4");

const onlineService = document.getElementById("onlineService");
const largeStorage = document.getElementById("largeStorage");
const customizableProfile = document.getElementById("customizableProfile");

const onlineServiceInput = document.getElementById("onlineServiceInput");
const largeStorageInput = document.getElementById("largeStorageInput");
const customizableProfileInput = document.getElementById(
  "customizableProfileInput"
);

const selectedPlanName = document.getElementById("selectedPlan-Name");
const selectedPlanPrice = document.getElementById("selectedPlan-Price");

const arcadePlan = document.getElementById("arcadePlan");
const advancedPlan = document.getElementById("advancedPlan");
const proPlan = document.getElementById("proPlan");

if (onlineServiceInput.checked) {
  onlineService.style.backgroundColor = "hsl(217, 100%, 97%)";
  onlineService.style.outline = "1px solid hsl(243, 100%, 62%)";
}

if (largeStorageInput.checked) {
  largeStorage.style.backgroundColor = "hsl(217, 100%, 97%)";
  largeStorage.style.outline = "1px solid hsl(243, 100%, 62%)";
}

if (customizableProfileInput.checked) {
  customizableProfile.style.backgroundColor = "hsl(217, 100%, 97%)";
  customizableProfile.style.outline = "1px solid hsl(243, 100%, 62%)";
}

const planPriceMonthly = Array.from(
  document.getElementsByClassName("planPrice-monthly")
);
const planPriceYearly = Array.from(
  document.getElementsByClassName("planPrice-yearly")
);
const free = Array.from(document.getElementsByClassName("free"));

const addOnsMonthlyPrice = Array.from(
  document.getElementsByClassName("addOnsMonthlyPrice")
);
const addOnsYearlyPrice = Array.from(
  document.getElementsByClassName("addOnsYearlyPrice")
);

const selectedAddOnsOnlineService = document.getElementById(
  "selectedAddOns-onlineService"
);
const selectedAddOnsLargeStorage = document.getElementById(
  "selectedAddOns-largeStorage"
);
const selectedAddOnsProfile = document.getElementById("selectedAddOns-profile");

const selectedAddOnsPriceMonthly = Array.from(
  document.getElementsByClassName("selectedAddOns-Price--monthly")
);

const selectedAddOnsPriceYearly = Array.from(
  document.getElementsByClassName("selectedAddOns-Price--yearly")
);

const totalAmt = document.getElementById("totalAmt");
const tottleTitle = document.getElementById("tottleTitle");

const changePlan = document.getElementById("changePlan");
const thankyouPage = document.getElementById("thankyouPage");
const footerBtns = document.getElementById("footerBtns");
var stepNo = 1;

if (monthlyYearlyCheckbox.checked) {
  monthly.style.opacity = "50%";
  yearly.style.opacity = "100%";

  planPriceMonthly.forEach((element) => {
    element.style.display = "none";
  });

  planPriceYearly.forEach((element) => {
    element.style.display = "block";
  });

  free.forEach((element) => {
    element.style.display = "block";
  });
}

nextBtn.addEventListener("click", () => {
  if (stepNo == 1) {
    var nameE = 0;
    var emailE = 0;
    var PhoneE = 0;

    if (nameInput.value == "" || nameInput.value == undefined) {
      nameInput.style.border = "none";
      nameInput.style.outline = "1px solid hsl(354, 84%, 57%)";
      nameError.style.display = "block";
      nameE = 1;
    } else {
      nameInput.style.outline = "none";
      nameInput.style.border = "1px solid hsl(229, 24%, 87%)";
      nameError.style.display = "none";
      if (nameE) !nameE;
    }

    if (emailInput.value == "" || emailInput.value == undefined) {
      emailInput.style.border = "none";
      emailInput.style.outline = "1px solid hsl(354, 84%, 57%)";
      emailError.style.display = "block";
      emailE = 1;
    } else {
      emailInput.style.outline = "none";
      emailInput.style.border = "1px solid hsl(229, 24%, 87%)";
      emailError.style.display = "none";
      if (emailE) !emailE;
    }

    if (phoneNoInput.value == "" || phoneNoInput.value == undefined) {
      phoneNoInput.style.border = "none";
      phoneNoInput.style.outline = "1px solid hsl(354, 84%, 57%)";
      phoneNoError.style.display = "block";
      PhoneE = 1;
    } else {
      phoneNoInput.style.outline = "none";
      phoneNoInput.style.border = "1px solid hsl(229, 24%, 87%)";
      phoneNoError.style.display = "none";
      if (PhoneE) !PhoneE;
    }

    if (!nameE && !emailE && !PhoneE) {
      if (stepNo == 1) {
        step1.style.display = "none";
        step2.style.display = "flex";
        backBtn.style.visibility = "visible";

        stepNo1.classList.remove("active");
        stepNo2.classList.add("active");

        stepNo++;
      }
    }
  } else if (stepNo == 2) {
    step2.style.display = "none";
    step3.style.display = "flex";
    backBtn.style.visibility = "visible";

    stepNo2.classList.remove("active");
    stepNo3.classList.add("active");

    if (monthlyYearlyCheckbox.checked) {
      addOnsMonthlyPrice.forEach((element) => {
        element.style.display = "none";
      });

      addOnsYearlyPrice.forEach((element) => {
        element.style.display = "block";
      });
    } else {
      addOnsMonthlyPrice.forEach((element) => {
        element.style.display = "block";
      });

      addOnsYearlyPrice.forEach((element) => {
        element.style.display = "none";
      });
    }

    stepNo++;
  } else if (stepNo == 3) {
    step3.style.display = "none";
    step4.style.display = "flex";
    backBtn.style.visibility = "visible";

    stepNo3.classList.remove("active");
    stepNo4.classList.add("active");

    nextBtn.innerHTML = "Confirm";
    nextBtn.style.backgroundColor = "hsl(243, 100%, 62%)";

    if (arcadePlan.checked) {
      var arcadeName = "Arcade (Monthly)";
      selectedPlanPrice.innerHTML = "$9/mo";
      if (monthlyYearlyCheckbox.checked) {
        arcadeName = "Arcade (Yearly)";
        selectedPlanPrice.innerHTML = "$90/yr";
      }
      selectedPlanName.innerHTML = arcadeName;
    } else if (advancedPlan.checked) {
      var advanceName = "Advance (Monthly)";
      selectedPlanPrice.innerHTML = "$12/mo";

      if (monthlyYearlyCheckbox.checked) {
        advanceName = "Advance (Yearly)";
        selectedPlanPrice.innerHTML = "$120/yr";
      }
      selectedPlanName.innerHTML = advanceName;
    } else if (proPlan.checked) {
      var proName = "Pro (Monthly)";
      selectedPlanPrice.innerHTML = "$15/mo";
      if (monthlyYearlyCheckbox.checked) {
        proName = "Pro (Yearly)";
        selectedPlanPrice.innerHTML = "$150/yr";
      }
      selectedPlanName.innerHTML = proName;
    }

    if (onlineServiceInput.checked) {
      selectedAddOnsOnlineService.style.display = "flex";
      selectedAddOnsPriceMonthly[0].style.display = "block";
      selectedAddOnsPriceYearly[0].style.display = "none";
      if (monthlyYearlyCheckbox.checked) {
        selectedAddOnsPriceMonthly[0].style.display = "none";
        selectedAddOnsPriceYearly[0].style.display = "block";
      }
    } else {
      selectedAddOnsOnlineService.style.display = "none";
    }

    if (largeStorageInput.checked) {
      selectedAddOnsLargeStorage.style.display = "flex";
      selectedAddOnsPriceMonthly[1].style.display = "block";
      selectedAddOnsPriceYearly[1].style.display = "none";
      if (monthlyYearlyCheckbox.checked) {
        selectedAddOnsPriceMonthly[1].style.display = "none";
        selectedAddOnsPriceYearly[1].style.display = "block";
      }
    } else {
      selectedAddOnsLargeStorage.style.display = "none";
    }

    if (customizableProfileInput.checked) {
      selectedAddOnsProfile.style.display = "flex";
      selectedAddOnsPriceMonthly[2].style.display = "block";
      selectedAddOnsPriceYearly[2].style.display = "none";
      if (monthlyYearlyCheckbox.checked) {
        selectedAddOnsPriceMonthly[2].style.display = "none";
        selectedAddOnsPriceYearly[2].style.display = "block";
      }
    } else {
      selectedAddOnsProfile.style.display = "none";
    }

    var grandTotal = 0;
    if (arcadePlan.checked && !monthlyYearlyCheckbox.checked) {
      grandTotal = 9;
    } else if (arcadePlan.checked && monthlyYearlyCheckbox.checked) {
      grandTotal = 90;
    }

    if (advancedPlan.checked && !monthlyYearlyCheckbox.checked) {
      grandTotal = 12;
    } else if (advancedPlan.checked && monthlyYearlyCheckbox.checked) {
      grandTotal = 120;
    }

    if (proPlan.checked && !monthlyYearlyCheckbox.checked) {
      grandTotal = 15;
    } else if (proPlan.checked && monthlyYearlyCheckbox.checked) {
      grandTotal = 150;
    }

    if (!monthlyYearlyCheckbox.checked) {
      if (onlineServiceInput.checked) {
        grandTotal += 1;
      }
      if (customizableProfileInput.checked) {
        grandTotal += 2;
      }
      if (largeStorageInput.checked) {
        grandTotal += 3;
      }
      tottleTitle.innerHTML = "Total (per month)";
      totalAmt.innerHTML = `$ ${grandTotal}/mo`;
    } else if (monthlyYearlyCheckbox.checked) {
      if (onlineServiceInput.checked) {
        grandTotal += 10;
      }
      if (customizableProfileInput.checked) {
        grandTotal += 20;
      }
      if (largeStorageInput.checked) {
        grandTotal += 30;
      }

      tottleTitle.innerHTML = "Total (per year)";
      totalAmt.innerHTML = `$ ${grandTotal}/yr`;
    }

    stepNo++;
  } else if (stepNo == 4) {
    step4.style.display = "none";
    thankyouPage.style.display = "flex";
    backBtn.style.visibility = "hidden";
    footerBtns.style.visibility = "hidden";
  }
});

backBtn.addEventListener("click", () => {
  if (stepNo == 2) {
    step2.style.display = "none";
    step1.style.display = "flex";
    backBtn.style.visibility = "hidden";

    stepNo2.classList.remove("active");
    stepNo1.classList.add("active");

    stepNo--;
  } else if (stepNo == 3) {
    step3.style.display = "none";
    step2.style.display = "flex";

    stepNo3.classList.remove("active");
    stepNo2.classList.add("active");

    stepNo--;
  } else if (stepNo == 4) {
    step4.style.display = "none";
    step3.style.display = "flex";

    stepNo4.classList.remove("active");
    stepNo3.classList.add("active");
    nextBtn.innerHTML = "Next Step";
    nextBtn.style.backgroundColor = "hsl(213, 96%, 18%)";
    stepNo--;
  }
});

monthlyYearlyCheckbox.addEventListener("click", () => {
  if (monthlyYearlyCheckbox.checked) {
    monthly.style.opacity = "50%";
    yearly.style.opacity = "100%";

    free.forEach((element) => {
      element.style.display = "block";
    });

    planPriceMonthly.forEach((element) => {
      element.style.display = "none";
    });

    planPriceYearly.forEach((element) => {
      element.style.display = "block";
    });
  } else {
    monthly.style.opacity = "100%";
    yearly.style.opacity = "50%";

    free.forEach((element) => {
      element.style.display = "none";
    });

    planPriceMonthly.forEach((element) => {
      element.style.display = "block";
    });

    planPriceYearly.forEach((element) => {
      element.style.display = "none";
    });
  }
});

onlineServiceInput.addEventListener("click", () => {
  if (onlineServiceInput.checked) {
    onlineService.style.backgroundColor = "hsl(217, 100%, 97%)";
    onlineService.style.outline = "1px solid hsl(243, 100%, 62%)";
  } else {
    onlineService.style.backgroundColor = "transparent";
    onlineService.style.outline = "1px solid hsl(229, 24%, 87%)";
  }
});

largeStorageInput.addEventListener("click", () => {
  if (largeStorageInput.checked) {
    largeStorage.style.backgroundColor = "hsl(217, 100%, 97%)";
    largeStorage.style.outline = "1px solid hsl(243, 100%, 62%)";
  } else {
    largeStorage.style.backgroundColor = "transparent";
    largeStorage.style.outline = "1px solid hsl(229, 24%, 87%)";
  }
});

customizableProfileInput.addEventListener("click", () => {
  if (customizableProfileInput.checked) {
    customizableProfile.style.backgroundColor = "hsl(217, 100%, 97%)";
    customizableProfile.style.outline = "1px solid hsl(243, 100%, 62%)";
  } else {
    customizableProfile.style.backgroundColor = "transparent";
    customizableProfile.style.outline = "1px solid hsl(229, 24%, 87%)";
  }
});

changePlan.addEventListener("click", () => {
  if (stepNo == 4) {
    step4.style.display = "none";
    step3.style.display = "none";
    step2.style.display = "flex";

    stepNo4.classList.remove("active");
    stepNo3.classList.remove("active");
    stepNo2.classList.add("active");
    nextBtn.innerHTML = "Next Step";
    nextBtn.style.backgroundColor = "hsl(213, 96%, 18%)";
    stepNo -= 2;
  }
});
