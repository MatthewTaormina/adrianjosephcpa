/**
 * Adrian Joseph CPA — Interactive Client Experience Scripts
 */

document.addEventListener('DOMContentLoaded', () => {
  initMobileNav();
  initAudienceTabs();
  initTaxEstimator();
  initConsultationForms();
  initFaqAccordion();
});

/* ==========================================================================
   1. Mobile Navigation
   ========================================================================== */
function initMobileNav() {
  const toggleBtn = document.querySelector('.mobile-nav-toggle');
  const mainNav = document.querySelector('.main-nav');

  if (!toggleBtn || !mainNav) return;

  toggleBtn.addEventListener('click', () => {
    const isExpanded = toggleBtn.getAttribute('aria-expanded') === 'true';
    toggleBtn.setAttribute('aria-expanded', !isExpanded);
    mainNav.classList.toggle('mobile-active');
  });

  // Close when clicking outside
  document.addEventListener('click', (e) => {
    if (!mainNav.contains(e.target) && !toggleBtn.contains(e.target) && mainNav.classList.contains('mobile-active')) {
      mainNav.classList.remove('mobile-active');
      toggleBtn.setAttribute('aria-expanded', 'false');
    }
  });
}

/* ==========================================================================
   2. Audience Tabs ("Who We Serve")
   ========================================================================== */
function initAudienceTabs() {
  const tabButtons = document.querySelectorAll('.tab-btn');
  const tabPanels = document.querySelectorAll('.tab-panel');

  if (!tabButtons.length || !tabPanels.length) return;

  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-tab');

      // Update button states
      tabButtons.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');

      // Update panel visibility
      tabPanels.forEach(panel => {
        if (panel.id === targetId) {
          panel.classList.add('active');
        } else {
          panel.classList.remove('active');
        }
      });
    });
  });
}

/* ==========================================================================
   3. Interactive Canadian Corporate Tax Deferral Estimator
   ========================================================================== */
function initTaxEstimator() {
  const incomeSlider = document.getElementById('calc-income');
  const incomeInput = document.getElementById('calc-income-num');
  const retainSlider = document.getElementById('calc-retain');
  const retainDisplay = document.getElementById('calc-retain-val');

  if (!incomeSlider && !incomeInput) return;

  function calculateTax() {
    const income = parseFloat(incomeSlider ? incomeSlider.value : incomeInput.value) || 250000;
    const retainPct = retainSlider ? parseFloat(retainSlider.value) : 60;

    if (incomeInput && incomeSlider) {
      incomeInput.value = income;
      incomeSlider.value = income;
    }
    if (retainDisplay && retainSlider) {
      retainDisplay.textContent = retainSlider.value + '%';
    }

    // Ontario CCPC Tax Rates (2024/2026):
    // Small business rate: 9% Federal + 3.2% Ontario = 12.2% on first $500,000
    // General rate above $500k: 15% Federal + 11.5% Ontario = 26.5%
    let corporateTax = 0;
    if (income <= 500000) {
      corporateTax = income * 0.122;
    } else {
      corporateTax = (500000 * 0.122) + ((income - 500000) * 0.265);
    }

    // Average top personal tax rate in Ontario is ~53.53%
    const personalTaxEstimate = income * 0.485;

    // Retained amount in corporation
    const retainedInCorp = income * (retainPct / 100);
    // Approximate deferral advantage (cash preserved inside corporation for reinvestment)
    const deferralSavings = retainedInCorp * (0.485 - 0.122);

    // Update UI elements
    const elCorpTax = document.getElementById('res-corp-tax');
    const elPersonalTax = document.getElementById('res-personal-tax');
    const elDeferral = document.getElementById('res-deferral');
    const elEffectiveRate = document.getElementById('res-effective-rate');

    if (elCorpTax) elCorpTax.textContent = formatCurrency(corporateTax);
    if (elPersonalTax) elPersonalTax.textContent = formatCurrency(personalTaxEstimate);
    if (elDeferral) elDeferral.textContent = formatCurrency(deferralSavings);
    if (elEffectiveRate) {
      const effRate = ((corporateTax / income) * 100).toFixed(1);
      elEffectiveRate.textContent = effRate + '%';
    }
  }

  function formatCurrency(amount) {
    return new Intl.NumberFormat('en-CA', {
      style: 'currency',
      currency: 'CAD',
      maximumFractionDigits: 0
    }).format(amount);
  }

  if (incomeSlider) incomeSlider.addEventListener('input', calculateTax);
  if (incomeInput) incomeInput.addEventListener('input', (e) => {
    if (incomeSlider) incomeSlider.value = e.target.value;
    calculateTax();
  });
  if (retainSlider) retainSlider.addEventListener('input', calculateTax);

  // Initial calculation
  calculateTax();
}

/* ==========================================================================
   4. Consultation & Contact Forms
   ========================================================================== */
function initConsultationForms() {
  const forms = document.querySelectorAll('form[data-consultation-form]');

  forms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const btn = form.querySelector('button[type="submit"]');
      const originalText = btn ? btn.innerHTML : 'Submit';

      if (btn) {
        btn.disabled = true;
        btn.innerHTML = 'Sending Request...';
      }

      // Simulate client inquiry capture
      setTimeout(() => {
        form.innerHTML = `
          <div style="background-color: #ecfdf5; border: 1px solid #10b981; border-radius: 8px; padding: 2rem; text-align: center;">
            <div style="font-size: 2.5rem; color: #059669; margin-bottom: 0.5rem;">✓</div>
            <h3 style="color: #065f46; font-size: 1.25rem; margin-bottom: 0.5rem;">Consultation Request Received</h3>
            <p style="color: #047857; font-size: 0.95rem; margin-bottom: 1rem;">
              Thank you for reaching out to Adrian Joseph CPA. Adrian or Tania Joseph will review your inquiries and contact you within one business day.
            </p>
            <p style="font-size: 0.85rem; color: #065f46;">
              Urgent inquiries? Call directly at <strong>(289) 624-2407</strong>.
            </p>
          </div>
        `;
      }, 700);
    });
  });
}

/* ==========================================================================
   5. FAQ Accordion
   ========================================================================== */
function initFaqAccordion() {
  const faqHeaders = document.querySelectorAll('.faq-question');

  faqHeaders.forEach(header => {
    header.addEventListener('click', () => {
      const item = header.parentElement;
      const isOpen = item.classList.contains('active');

      // Close all
      document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('active'));

      if (!isOpen) {
        item.classList.add('active');
      }
    });
  });
}
