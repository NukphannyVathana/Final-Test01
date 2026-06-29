<template>
  <main>
    <!-- Mobile Menu -->


<!-- ===================== ORDER HERO BANNER ===================== -->
<section class="order-hero">
    <div class="order-hero-bg"></div>
    <div class="order-hero-content">
        <p class="order-hero-tag" >{{ t('🚚 Fast Delivery · 30 Minutes', '🚚 ដឹកជញ្ជូនរហ័ស · ៣០ នាទី') }}</p>
        <h1 >{{ t('Order Now', 'កម៉ង់ឥឡូវ') }}</h1>
        <p >{{ t('Fresh authentic Khmer food delivered to your door.', 'ម្ហូបខ្មែរស្រស់ ពិតប្រាកដ ដឹកជញ្ជូនដល់ទ្វារ។') }}</p>
    </div>
</section>

<!-- ===================== MAIN ORDER LAYOUT ===================== -->
<main class="order-layout">

    <!-- ─── LEFT: Menu Picker ─────────────────────── -->
    <section class="order-menu-picker">

        <!-- Delivery / Pickup Toggle -->
        <div class="mode-toggle-wrap">
            <div class="mode-toggle" id="mode-toggle">
                <button class="mode-btn active" id="mode-delivery" >{{ t('🚚 Delivery', '🚚 ដឹកជញ្ជូន') }}</button>
                <button class="mode-btn" id="mode-pickup" >{{ t('🏪 Pickup', '🏪 យករហ័ស') }}</button>
            </div>
        </div>

        <!-- Category Tabs -->
        <div class="category-tabs" id="category-tabs">
            <button class="cat-tab active" data-cat="all"      >{{ t('All', 'ទាំងអស់') }}</button>
            <button class="cat-tab"        data-cat="amok"     >{{ t('Amok', 'អាម៉ុក') }}</button>
            <button class="cat-tab"        data-cat="soup"     >{{ t('Soup', 'ស្ងោរ') }}</button>
            <button class="cat-tab"        data-cat="stirfry"  >{{ t('Stir Fry', 'ឆា') }}</button>
            <button class="cat-tab"        data-cat="grilled"  >{{ t('Grilled', 'អាំង') }}</button>
            <button class="cat-tab"        data-cat="seafood"  >{{ t('Seafood', 'សមុទ្រ') }}</button>
            <button class="cat-tab"        data-cat="dessert"  >{{ t('Desserts', 'បង្អែម') }}</button>
        </div>

        <!-- Search -->
        <div class="search-wrap">
            <span class="search-icon">🔍</span>
            <input type="text" id="menu-search" placeholder="Search dishes..." data-en-placeholder="Search dishes..." data-kh-placeholder="ស្វែងរកម្ហូប...">
        </div>

        <!-- Menu Items Grid -->
        <div class="menu-picker-grid" id="menu-picker-grid">

            <!-- AMOK -->
            <div class="picker-card" data-cat="amok" data-id="amok-fish">
                <div class="picker-img-wrap">
                    <img src="/images/amok.jpg" alt="Fish Amok" loading="lazy">
                    <span class="picker-badge" >{{ t('⭐ Signature', '⭐ ម្ហូបពិសេស') }}</span>
                </div>
                <div class="picker-info">
                    <div class="picker-text">
                        <h3 >{{ t('Fish Amok', 'អាម៉ុកត្រី') }}</h3>
                        <p >{{ t('Steamed fish in coconut curry, banana leaf.', 'ត្រីចំហុយខ្ទិះដូង ស្លឹកចេក។') }}</p>
                    </div>
                    <div class="picker-footer">
                        <span class="picker-price">$8.99</span>
                        <button class="add-btn" data-id="amok-fish" data-name-en="Fish Amok" data-name-kh="អាម៉ុកត្រី" data-price="8.99" aria-label="Add Fish Amok">
                            <span>+</span>
                        </button>
                    </div>
                </div>
            </div>

            <div class="picker-card" data-cat="amok" data-id="amok-chicken">
                <div class="picker-img-wrap">
                    <img src="/images/amok.jpg" alt="Chicken Amok" loading="lazy">
                </div>
                <div class="picker-info">
                    <div class="picker-text">
                        <h3 >{{ t('Chicken Amok', 'អាម៉ុកមាន់') }}</h3>
                        <p >{{ t('Tender chicken in fragrant Khmer curry paste.', 'សាច់មាន់ក្នុងគ្រឿងទេសខ្មែរ។') }}</p>
                    </div>
                    <div class="picker-footer">
                        <span class="picker-price">$9.50</span>
                        <button class="add-btn" data-id="amok-chicken" data-name-en="Chicken Amok" data-name-kh="អាម៉ុកមាន់" data-price="9.50" aria-label="Add Chicken Amok">
                            <span>+</span>
                        </button>
                    </div>
                </div>
            </div>

            <!-- SOUP -->
            <div class="picker-card" data-cat="soup" data-id="soup-sour">
                <div class="picker-img-wrap">
                    <img src="/images/samlorsngor.jpg" alt="Sour Soup" loading="lazy">
                </div>
                <div class="picker-info">
                    <div class="picker-text">
                        <h3 >{{ t('Khmer Sour Soup', 'សម្លរស្ងោរ') }}</h3>
                        <p >{{ t('Traditional sour broth with fresh herbs.', 'ទំពាំងបាយជូរប្រពៃណីជាមួយស្មៅ។') }}</p>
                    </div>
                    <div class="picker-footer">
                        <span class="picker-price">$7.50</span>
                        <button class="add-btn" data-id="soup-sour" data-name-en="Khmer Sour Soup" data-name-kh="សម្លរស្ងោរ" data-price="7.50" aria-label="Add Sour Soup">
                            <span>+</span>
                        </button>
                    </div>
                </div>
            </div>

            <div class="picker-card" data-cat="soup" data-id="soup-prahok">
                <div class="picker-img-wrap">
                    <img src="/images/samlorsngor.jpg" alt="Prahok Soup" loading="lazy">
                </div>
                <div class="picker-info">
                    <div class="picker-text">
                        <h3 >{{ t('Prahok Soup', 'សម្លរប្រហក់') }}</h3>
                        <p >{{ t('Pork and fermented fish paste broth.', 'សម្លរជ្រូកប្រហក់ក្រអូប។') }}</p>
                    </div>
                    <div class="picker-footer">
                        <span class="picker-price">$7.00</span>
                        <button class="add-btn" data-id="soup-prahok" data-name-en="Prahok Soup" data-name-kh="សម្លរប្រហក់" data-price="7.00" aria-label="Add Prahok Soup">
                            <span>+</span>
                        </button>
                    </div>
                </div>
            </div>

            <!-- STIR FRY -->
            <div class="picker-card" data-cat="stirfry" data-id="cha-beef">
                <div class="picker-img-wrap">
                    <img src="/images/cha.jpg" alt="Beef Stir Fry" loading="lazy">
                </div>
                <div class="picker-info">
                    <div class="picker-text">
                        <h3 >{{ t('Beef Stir Fry', 'សាច់គោឆា') }}</h3>
                        <p >{{ t('Wok-tossed beef with lemongrass & peppers.', 'សាច់គោឆាស្រស្ករ ស្ករគ្រាប់ ម្រេច។') }}</p>
                    </div>
                    <div class="picker-footer">
                        <span class="picker-price">$9.99</span>
                        <button class="add-btn" data-id="cha-beef" data-name-en="Beef Stir Fry" data-name-kh="សាច់គោឆា" data-price="9.99" aria-label="Add Beef Stir Fry">
                            <span>+</span>
                        </button>
                    </div>
                </div>
            </div>

            <div class="picker-card" data-cat="stirfry" data-id="cha-veg">
                <div class="picker-img-wrap">
                    <img src="/images/cha.jpg" alt="Veggie Stir Fry" loading="lazy">
                </div>
                <div class="picker-info">
                    <div class="picker-text">
                        <h3 >{{ t('Veggie Stir Fry', 'បន្លែឆា') }}</h3>
                        <p >{{ t('Seasonal vegetables with Khmer seasoning.', 'បន្លែតាមរដូវ ទេសខ្មែរ។') }}</p>
                    </div>
                    <div class="picker-footer">
                        <span class="picker-price">$6.50</span>
                        <button class="add-btn" data-id="cha-veg" data-name-en="Veggie Stir Fry" data-name-kh="បន្លែឆា" data-price="6.50" aria-label="Add Veggie Stir Fry">
                            <span>+</span>
                        </button>
                    </div>
                </div>
            </div>

            <!-- GRILLED -->
            <div class="picker-card" data-cat="grilled" data-id="ang-chicken">
                <div class="picker-img-wrap">
                    <img src="/images/ang.jpg" alt="Grilled Chicken" loading="lazy">
                </div>
                <div class="picker-info">
                    <div class="picker-text">
                        <h3 >{{ t('Grilled Chicken', 'មាន់អាំង') }}</h3>
                        <p >{{ t('Marinated charcoal chicken with dipping sauce.', 'មាន់ត្រាំអាំងធ្យូង ទឹកជ្រលក់ពិសេស។') }}</p>
                    </div>
                    <div class="picker-footer">
                        <span class="picker-price">$10.99</span>
                        <button class="add-btn" data-id="ang-chicken" data-name-en="Grilled Chicken" data-name-kh="មាន់អាំង" data-price="10.99" aria-label="Add Grilled Chicken">
                            <span>+</span>
                        </button>
                    </div>
                </div>
            </div>

            <div class="picker-card" data-cat="grilled" data-id="ang-pork">
                <div class="picker-img-wrap">
                    <img src="/images/ang.jpg" alt="Grilled Pork" loading="lazy">
                </div>
                <div class="picker-info">
                    <div class="picker-text">
                        <h3 >{{ t('Grilled Pork Ribs', 'ឆ្អឹងជ្រូកអាំង') }}</h3>
                        <p >{{ t('Slow-grilled ribs glazed with honey & garlic.', 'ឆ្អឹងជ្រូកអាំងយឺតជាមួយទឹកឃ្មុំ ខ្ទឹម។') }}</p>
                    </div>
                    <div class="picker-footer">
                        <span class="picker-price">$13.50</span>
                        <button class="add-btn" data-id="ang-pork" data-name-en="Grilled Pork Ribs" data-name-kh="ឆ្អឹងជ្រូកអាំង" data-price="13.50" aria-label="Add Grilled Pork Ribs">
                            <span>+</span>
                        </button>
                    </div>
                </div>
            </div>

            <!-- SEAFOOD -->
            <div class="picker-card" data-cat="seafood" data-id="crab-pepper">
                <div class="picker-img-wrap">
                    <img src="/images/samudra.jpg" alt="Crab Kampot Pepper" loading="lazy">
                    <span class="picker-badge picker-badge--gold" >{{ t('🌶️ Popular', '🌶️ ល្បី') }}</span>
                </div>
                <div class="picker-info">
                    <div class="picker-text">
                        <h3 >{{ t('Crab Kampot Pepper', 'ក្តាមម្រេចកំពត') }}</h3>
                        <p >{{ t('Fresh crab with world-famous Kampot pepper.', 'ក្តាមស្រស់ម្រេចខ្មៅកំពតល្បី។') }}</p>
                    </div>
                    <div class="picker-footer">
                        <span class="picker-price">$15.99</span>
                        <button class="add-btn" data-id="crab-pepper" data-name-en="Crab Kampot Pepper" data-name-kh="ក្តាមម្រេចកំពត" data-price="15.99" aria-label="Add Crab Kampot Pepper">
                            <span>+</span>
                        </button>
                    </div>
                </div>
            </div>

            <div class="picker-card" data-cat="seafood" data-id="prawn-tamarind">
                <div class="picker-img-wrap">
                    <img src="/images/samudra.jpg" alt="Prawn Tamarind" loading="lazy">
                </div>
                <div class="picker-info">
                    <div class="picker-text">
                        <h3 >{{ t('Prawn Tamarind', 'បង្គាអម្ពិល') }}</h3>
                        <p >{{ t('Tiger prawns in tangy tamarind glaze.', 'បង្គាក្ដាមអម្ពិលជូរ ផ្អែមមូល។') }}</p>
                    </div>
                    <div class="picker-footer">
                        <span class="picker-price">$13.00</span>
                        <button class="add-btn" data-id="prawn-tamarind" data-name-en="Prawn Tamarind" data-name-kh="បង្គាអម្ពិល" data-price="13.00" aria-label="Add Prawn Tamarind">
                            <span>+</span>
                        </button>
                    </div>
                </div>
            </div>

            <!-- DESSERT -->
            <div class="picker-card" data-cat="dessert" data-id="dessert-num">
                <div class="picker-img-wrap">
                    <img src="/images/dessert.jpg" alt="Num Ansom" loading="lazy">
                </div>
                <div class="picker-info">
                    <div class="picker-text">
                        <h3 >{{ t('Num Ansom', 'នំអន្សម') }}</h3>
                        <p >{{ t('Sticky rice cake with banana & coconut.', 'នំបាយដំណើបជាមួយចេក ខ្ទិះដូង។') }}</p>
                    </div>
                    <div class="picker-footer">
                        <span class="picker-price">$4.50</span>
                        <button class="add-btn" data-id="dessert-num" data-name-en="Num Ansom" data-name-kh="នំអន្សម" data-price="4.50" aria-label="Add Num Ansom">
                            <span>+</span>
                        </button>
                    </div>
                </div>
            </div>

            <div class="picker-card" data-cat="dessert" data-id="dessert-cha">
                <div class="picker-img-wrap">
                    <img src="/images/dessert.jpg" alt="Cha Houy Teuk" loading="lazy">
                </div>
                <div class="picker-info">
                    <div class="picker-text">
                        <h3 >{{ t('Cha Houy Teuk', 'ចាហួយទឹក') }}</h3>
                        <p >{{ t('Khmer jelly dessert with coconut milk.', 'ចាហួយខ្មែរ ទឹកដោះដូង ជូរ-ផ្អែម។') }}</p>
                    </div>
                    <div class="picker-footer">
                        <span class="picker-price">$3.99</span>
                        <button class="add-btn" data-id="dessert-cha" data-name-en="Cha Houy Teuk" data-name-kh="ចាហួយទឹក" data-price="3.99" aria-label="Add Cha Houy Teuk">
                            <span>+</span>
                        </button>
                    </div>
                </div>
            </div>

        </div><!-- /menu-picker-grid -->
    </section>

    <!-- ─── RIGHT: Order Summary + Checkout ──────── -->
    <aside class="order-sidebar">

        <!-- Cart -->
        <div class="cart-box">
            <div class="cart-header">
                <h2 >{{ t('🛒 Your Order', '🛒 ការកម៉ង់របស់អ្នក') }}</h2>
                <span class="cart-count" id="cart-count">0</span>
            </div>

            <div class="cart-empty" id="cart-empty">
                <span>🍽️</span>
                <p >{{ t('Your cart is empty. Add some delicious dishes!', 'កន្ត្រកទទេ! បន្ថែមមុខម្ហូបសម្រាប់អ្នក!') }}</p>
            </div>

            <ul class="cart-list" id="cart-list"></ul>

            <div class="cart-summary" id="cart-summary" style="display:none">
                <div class="summary-row">
                    <span >{{ t('Subtotal', 'សរុបរង') }}</span>
                    <span id="subtotal">$0.00</span>
                </div>
                <div class="summary-row" id="delivery-row">
                    <span >{{ t('Delivery Fee', 'កម្រៃដឹក') }}</span>
                    <span id="delivery-fee">$2.00</span>
                </div>
                <div class="summary-row summary-total">
                    <span >{{ t('Total', 'សរុប') }}</span>
                    <span id="total-price">$0.00</span>
                </div>
            </div>
        </div>

        <!-- Customer Details -->
        <div class="checkout-form" id="checkout-form">
            <h3 class="form-section-title" >{{ t('📋 Your Details', '📋 ព័ត៌មានអ្នក') }}</h3>

            <div class="form-grid">
                <div class="form-group">
                    <label for="cust-name" >{{ t('Full Name', 'ឈ្មោះពេញ') }}</label>
                    <input type="text" id="cust-name" placeholder="Your name" data-en-placeholder="Your name" data-kh-placeholder="ឈ្មោះអ្នក">
                </div>
                <div class="form-group">
                    <label for="cust-phone" >{{ t('Phone Number', 'លេខទូរស័ព្ទ') }}</label>
                    <input type="tel" id="cust-phone" placeholder="+855 xx xxx xxx" data-en-placeholder="+855 xx xxx xxx" data-kh-placeholder="+855 xx xxx xxx">
                </div>
            </div>

            <!-- Delivery address (hidden if pickup) -->
            <div class="form-group" id="address-group">
                <label for="cust-address" >{{ t('Delivery Address', 'អាសយដ្ឋានដឹក') }}</label>
                <textarea id="cust-address" rows="2" placeholder="Street, district, city..." data-en-placeholder="Street, district, city..." data-kh-placeholder="ផ្លូវ ខណ្ឌ ក្រុង..."></textarea>
            </div>

            <div class="form-group">
                <label for="cust-note" >{{ t('Special Instructions (optional)', 'ចំណាំពិសេស (ជាជម្រើស)') }}</label>
                <textarea id="cust-note" rows="2" placeholder="e.g. No spice, extra sauce..." data-en-placeholder="e.g. No spice, extra sauce..." data-kh-placeholder="ឧ. មិនហ្វឺន ទឹកជ្រលក់ច្រើន..."></textarea>
            </div>

            <!-- Payment -->
            <h3 class="form-section-title" style="margin-top:24px" >{{ t('💳 Payment Method', '💳 វិធីបង់ប្រាក់') }}</h3>
            <div class="payment-options">
                <label class="payment-card active" id="pay-cash-label">
                    <input type="radio" name="payment" value="cash" checked id="pay-cash">
                    <span class="pay-icon">💵</span>
                    <span >{{ t('Cash on Delivery', 'បង់ប្រាក់ពេលទទួល') }}</span>
                </label>
                <label class="payment-card" id="pay-aba-label">
                    <input type="radio" name="payment" value="aba" id="pay-aba">
                    <span class="pay-icon">🏦</span>
                    <span >{{ t('ABA Bank', 'ធនាគារ ABA') }}</span>
                </label>
                <label class="payment-card" id="pay-wing-label">
                    <input type="radio" name="payment" value="wing" id="pay-wing">
                    <span class="pay-icon">📱</span>
                    <span >{{ t('Wing Money', 'Wing Money') }}</span>
                </label>
            </div>

            <!-- Place Order -->
            <button class="place-order-btn" id="place-order-btn" disabled>
                <span >{{ t('Place Order', 'ដាក់ការកម៉ង់') }}</span>
                <span class="btn-arrow">→</span>
            </button>
            <p class="order-note" >{{ t('⏱ Estimated delivery: 25–35 minutes', '⏱ ប៉ាន់ស្មានពេលដឹក: ២៥–៣៥ នាទី') }}</p>
        </div>

    </aside><!-- /order-sidebar -->
</main>

<!-- ── SUCCESS TOAST ─────────────────────────── -->
<div class="toast" id="toast" role="alert">
    <span class="toast-icon">✅</span>
    <span id="toast-msg">Item added!</span>
</div>

<!-- ── ORDER SUCCESS MODAL ─────────────────────── -->
<div class="modal-overlay" id="success-modal">
    <div class="modal-box">
        <div class="modal-icon">🎉</div>
        <h2 >{{ t('Order Placed!', 'ការកម៉ង់បានដាក់!') }}</h2>
        <p >{{ t('Thank you! Your order is being prepared. Estimated arrival: 30 minutes.', 'អរគុណ! ការកម៉ង់របស់អ្នកកំពុងត្រូវបានរៀបចំ។ ប៉ាន់ស្មាន: ៣០ នាទី។') }}</p>
        <div class="order-id-box">
            <span >{{ t('Order ID:', 'លេខការកម៉ង់:') }}</span>
            <strong id="order-id-val">#RK-0000</strong>
        </div>
        <RouterLink to="/" class="modal-back-btn">{{ t('← Back to Home', '← ត្រឡប់ទំព័រដើម') }}</RouterLink>
    </div>
</div>

<!-- ===================== FOOTER ===================== -->
  </main>
</template>

<script setup>
import { useLanguage } from '../composables/useLanguage'
const { t } = useLanguage()

const vReveal = {
  mounted: (el) => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(e => {
            if (e.isIntersecting) {
                e.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });
    observer.observe(el);
  }
}
</script>
