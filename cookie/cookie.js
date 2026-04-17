        let money = 0;
        let staff = 0;

        // ฟังก์ชันตอนเรากดเอง
        function clickCookie() {
            money = money + 1;
            updateUI();
        }

        // กดจ้างพนักงาน
        function buyStaff() {
            if (money >= 15) {
                money = money - 15;
                staff = staff + 1;
                updateUI();
            } else {
                alert("เงินไม่พอ!");
            }
        }

        // ผลิตคุกกี้อัตโนมัติ 
        setInterval(function() {
            if (staff > 0) {
                money = money + staff;
                updateUI();
            }
        }, 1000);

        // อัปเดตตัวเลขบนหน้าจอ
        function updateUI() {
            document.getElementById("money").innerText = money;
            document.getElementById("cps").innerText = staff;
        }