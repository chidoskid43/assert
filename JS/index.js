// index.js

document.addEventListener("DOMContentLoaded", function () {
  const features = [
    {
      icon: "fa-wallet",
      title: "Multi-currency Wallet",
      desc: "Store and manage Bitcoin, Ethereum, and many more all in one place."
    },
    {
      icon: "fa-lock",
      title: "Secure Transactions",
      desc: "All transactions are encrypted and protected using blockchain security."
    },
    {
      icon: "fa-chart-line",
      title: "Real-time Tracking",
      desc: "Track your portfolio in real-time with smart analytics."
    },
    {
      icon: "fa-mobile-screen-button",
      title: "Mobile Friendly",
      desc: "Access your wallet from any device, anytime, anywhere."
    },
    {
      icon: "fa-bolt",
      title: "Instant Exchange",
      desc: "Swap between crypto assets instantly with low fees."
    },
    {
      icon: "fa-thumbs-up",
      title: "User Friendly",
      desc: "Clean interface built for beginners and pros alike."
    }
  ];

  const featureCardsContainer = document.getElementById("featureCards");

  features.forEach(feature => {
    const col = document.createElement("div");
    col.className = "col-12 col-sm-6 col-md-4 mb-4";

    const card = `
      <div class="card h-100 shadow-sm border-0">
        <div class="card-body text-center">
          <i class="fa-solid ${feature.icon} fa-2x text-info mb-3"></i>
          <h5>${feature.title}</h5>
          <p>${feature.desc}</p>
        </div>
      </div>
    `;

    col.innerHTML = card;
    featureCardsContainer.appendChild(col);
  });
});


document.addEventListener("DOMContentLoaded", function () {
  const testimonials = [
    {
      name: "James Wilson",
      title: "Crypto Investor",
      image: "./imgfromGood/james.jpg", 
      message:
        "WalletWise has completely changed how I manage my digital assets. The security features are impressive and the interface is intuitive.",
      rating: 5
    },
    {
      name: "Sarah Johnson",
      title: "New Investor",
      image: "./imgfromGood/sarah.jpg", 
      message:
        "As someone new to cryptocurrency, I was worried about security. WalletWise made it easy to get started and taught me good habits.",
      rating: 5
    },
    {
      name: "Michael Chan",
      title: "DeFi Developer",
      image: "./imgfromGood/chan.jpg", 
      message:
        "I’ve tried several crypto wallets, and WalletWise is by far the best. The swap and exchange tools saved me a lot of time and money.",
      rating: 5
    }
  ];

  const container = document.getElementById("testimonialCards");

  testimonials.forEach((t) => {
    const card = document.createElement("div");
    card.className = "col-md-4 mb-4";

    card.innerHTML = `
      <div class="card h-100 shadow-sm border-0 p-3">
        <p>${t.message}</p>
        <div class="d-flex align-items-center mt-4">
          <img src="${t.image}" alt="${t.name}" class="rounded-circle me-3" width="50" height="50" style="object-fit: cover;" />
          <div>
            <h6 class="mb-0 fw-bold">${t.name}</h6>
            <small class="text-muted">${t.title}</small>
            <div class="text-warning mt-1">
              ${'<i class="fas fa-star"></i>'.repeat(t.rating)}
            </div>
          </div>
        </div>
      </div>
    `;

    container.appendChild(card);
  });
});

const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,
  spaceBetween: 30,
  autoplay: {
    delay: 2000,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    480: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30
    },
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});


