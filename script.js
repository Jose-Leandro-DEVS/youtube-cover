
    const videos = [
        {
            title: "Como aprender JavaScript em 30 minutos",
            channel: "Dev Mastery",
            views: "150K",
            time: "há 2 dias",
            durations: "12:30",
            color: "#FF0000",
            isLive: false
        },
        {
            title: "AO VIVO: Desenvolvendo um jogo em Python",
            channel: "Code Games",
            views: "5K",
            time: "agora",
            durations: "1:45:22",
            color: "#00FF00",
            isLive: true
        },
        {
            title: "Tutorial de React para iniciantes",
            channel: "FrontEnd Tips",
            views: "80K",
            time: "há 1 semana",
            durations: "25:15",
            color: "#0000FF",
            isLive: false
        },
        {
            title: "Dicas de CSS que você não conhecia",
            channel: "Web Design",
            views: "200K",
            time: "há 3 semanas",
            durations: "10:45",
            color: "#FFA500",
            isLive: false
        },
        {
            title: "Live: Resolvendo desafios de algoritmos",
            channel: "Algo Experts",
            views: "3K",
            time: "agora",
            durations: "2:30:10",
            color: "#800080",
            isLive: true
        },
        // --- Novos vídeos adicionados abaixo ---
        {
            title: "Configurando Docker do ZERO",
            channel: "Cloud Guru",
            views: "42K",
            time: "há 5 dias",
            durations: "18:07",
            color: "#0E8A16",
            isLive: false
        },
        {
            title: "AO VIVO: Q&A sobre Carreira em TI",
            channel: "Tech Careers",
            views: "1.2K",
            time: "agora",
            durations: "1:12:33",
            color: "#FFD700",
            isLive: true
        },
        {
            title: "O que é State no React?",
            channel: "React Brasil",
            views: "95K",
            time: "há 1 mês",
            durations: "08:52",
            color: "#61DAFB",
            isLive: false
        },
        {
            title: "Criando API com Node.js e Express",
            channel: "Backend Simplified",
            views: "67K",
            time: "há 3 dias",
            durations: "34:20",
            color: "#68A063",
            isLive: false
        },
        {
            title: "Live: Montando PC Gamer 2024",
            channel: "Hardware Lab",
            views: "8K",
            time: "agora",
            durations: "3:15:00",
            color: "#FF4500",
            isLive: true
        },
        {
            title: "Git e GitHub para Iniciantes",
            channel: "Version Control",
            views: "120K",
            time: "há 2 meses",
            durations: "22:10",
            color: "#F34F29",
            isLive: true
        },
        {
            title: "Desmistificando Machine Learning",
            channel: "AI Today",
            views: "55K",
            time: "há 1 semana",
            durations: "45:18",
            color: "#4B0082",
            isLive: false
        }];

    const container = document.getElementById("videos")

    videos.forEach((video, i) => {
        const videoCard = document.createElement('article');

        videoCard.className = 'cursor-pointer'

        videoCard.innerHTML = `
           
            <div class="relative bg-gray-200 rounded-xl overflow-hidden">
            <img src="https://picsum.photos/320/180?random=${i}" class="w-full h-full object-cover">
            ${video.isLive ? '<span class="absolute top-4 right-2 bg-red-600 px-2 py-1 text-white text-xs rounded-md font-bold">AO VIVO</span>' : ''}
            <span class="absolute bottom-2 right-2 bg-black bg-opacity-80 px-1  text-white text-xs rounded">${video.durations}</span>
            </div>
            <div>
                <h3 class="font-medium text-base">${video.title}</h3>
                
                <p class="text-sm text-gray-600 mt-1">${video.channel}</p>
                <!--
                <p class="text-sm text-gray-600">${video.views} • ${video.time}</p>
                -->
                <p class="text-sm text-gray-600">${formatarVisualizacoes(video.views)} • ${video.time}</p>
            </div>

        `
       function formatarVisualizacoes(views) {
            // Se for string com "K" ou "M" (ex: "150K", "1.2M")
            if (typeof views === 'string') {
               const num = parseFloat(views.replace(/[^\d.]/g, '')); // Extrai o número
               if (views.includes('M') || views.includes('mi visualizações')) {
                   return `${num.toFixed(1).replace('.', ',')} mi visualizações`; // Converte "1.5M" → "1,5 mi visualizações"
               } else if (views.includes('K') || views.includes('k')) {
                   return `${num} mil visualizações`; // Converte "150K" → "150 mil visualizações"
               }
            }
            // Se for número puro (ex: 150000)
            else if (typeof views === 'number') {
                if (views >= 1000000) {
                    return `${(views / 1000000).toFixed(1).replace('.', ',')} mi visualizações`; // 1.500.000 → "1,5 mi"
                } else if (views >= 1000) {
                    return `${Math.floor(views / 1000)} mil visualizações`; // 1500 → "1 mil visualizações"
                }
            }
         // Padrão para valores baixos ou inválidos
            return views.toString();
        }
        container.appendChild(videoCard)
    });