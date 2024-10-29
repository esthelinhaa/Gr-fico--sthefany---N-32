const grafico = document.getElementById("meuGrafico").getContext("2d");
const meuGrafico = new Chart (grafico, {
    type: "pie",
    data: {
        labels: [
           "Instagram",
           "WhatsApp",
           "Facebook",
           "Wechat",
           "TikTok",
           "DouYin",
           "Twitter",
           "Telegram",
           "FB Messenger",
           "LINE",
        ]
        datasets :  [{
            data[
                16.5,
            ]
        }

        ]

    
    }
})