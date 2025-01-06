document.addEventListener("DOMContentLoaded", function () {
    const menu = `
        <label for="menu">Choose a page:</label>
        <select id="menu" onchange="location = this.value;">
            <option value="">-- Select --</option>
            <option value="https://wadcharid.github.io/vcr-fcaon/vcr1.html">1.หาค่า VCR</option>
            <option value="https://wadcharid.github.io/vcr-fcaon/vcr2.html">2.หาโซนจาก VCR</option>
            <option value="https://wadcharid.github.io/vcr-fcaon/pace1.html">3.คำนวณ Pace,Distance,Time</option>
            <option value="https://wadcharid.github.io/vcr-fcaon/pace2.html">4.คำนวณ %Pace</option>
            <option value="https://wadcharid.github.io/vcr-fcaon/pace3.html">5.VCR Weekly Plan</option>
            <option value="https://wadcharid.github.io/vcr-fcaon/load1.html">6.COROS Load</option>
            <option value="https://wadcharid.github.io/vcr-fcaon/training1.html">7.Training Program</option>
            <option value="https://wadcharid.github.io/vcr-fcaon/time1.html">8.คำนวณเวลาวิ่งรวม</option>
        </select>
    `;
    document.getElementById("menu-container").innerHTML = menu;
});
