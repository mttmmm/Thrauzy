import { useState, useRef, useEffect } from "react";
import vid1 from "./assets/videos/thrauzy.mp4";
import vid2 from "./assets/videos/thrauzi 2.mp4";
import vid3 from "./assets/videos/thrauzy 3.mp4";
import vid4 from "./assets/videos/thrauzy 4.mp4";
import vid5 from "./assets/videos/thrauzy 5.MOV";
import vid6 from "./assets/videos/thrauzy 6.MOV";
import vid7 from "./assets/videos/thrauzy 7.MOV";
import vid8 from "./assets/videos/thrauzy 8.MOV";
import bgCyber from "./assets/bg-cyber.jpg";
import demonGif from "./assets/gifs/8020a21a206635f0a475337603de2986.gif";
import nanaTrailer from "./assets/gifs/nanatrailerv.gif";
import eyeGif from "./assets/gifs/i1.gif";
import fallingEye1 from "./assets/retro-gifs/22f8829905251c8d1e88d81aed03c292.gif";
import mouthred from "./assets/mouthred para colocar ao lado do nome thauzy.png";


const allRetroFiles = import.meta.glob('./assets/retro-gifs/*.{gif,png,jpg,webp}', { eager: true });
const gifMap = Object.fromEntries(
  Object.entries(allRetroFiles).map(([path, mod]) => [path.replace('./assets/retro-gifs/', ''), mod.default || mod])
);
const fallingEye2 = gifMap['tumblr_23729aea3e09cd03c3cd554eb3d5566e_b1b09075_75.gif'] || fallingEye1;
const batSprite = `data:image/svg+xml;utf8,${encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220 100">
  <path fill="#120000" stroke="#5a0000" stroke-width="3" d="M7 54c13-15 30-23 48-25 9-1 17 2 23 8l12 12 20-22 20 22 12-12c6-6 14-9 23-8 18 2 35 10 48 25-10 0-18 4-24 11-7 9-11 18-21 24-11 7-25 8-39 5l-19-4-19 4c-14 3-28 2-39-5-10-6-14-15-21-24-6-7-14-11-24-11Z"/>
</svg>
`)}`;
const floatingSprites = [
  { src: fallingEye1, alt: "floating eye", type: "eye", size: 18 },
  { src: eyeGif, alt: "floating eye", type: "eye", size: 16 },
  { src: fallingEye2, alt: "floating eye", type: "eye", size: 18 },
  { src: batSprite, alt: "floating bat", type: "bat", size: 46 },
  { src: batSprite, alt: "floating bat", type: "bat", size: 52 },
  { src: batSprite, alt: "floating bat", type: "bat", size: 40 },
];

const originalGifNames = [
  '752b1764ffbeb9602f1b7f69b1dfe6a5.gif',
  '300f6243.gif',
  'a41a4ddb.gif',
  'ca8f826b.gif',
  'g44.gif',
  '4009cdef.gif',
  '83f43402.gif',
  '9515fc10.gif',
  'c6e03148.gif',
  'i3.gif',
  'tumblr_ad0156c4476144db90d7ab437360b6c1_67f6783f_250.gif',
  'tumblr_55f9ab2851675ee613bff384d022c276_b48acc5d_500.gif',
  'tumblr_f220a9ca4279af245ab36f318d875e42_170ddb82_250.gif',
  'tumblr_c82ee462156f0f2b9c389aa285665c1e_282c1028_250.gif',
  'tumblr_e07e696664a9116eea24212c7b8dc9bf_8ffe2f89_250.gif',
  'tumblr_f8c3af80cc50bbff74928f420ff70f29_d73cd25f_400.gif',
  'tumblr_e63ea05017153df4c1f13e929e78a6eb_dc9ff3a7_640.gif',
  'tumblr_f04f724eaa2ee39395713149fc2ee548_19a3ff76_250.gif',
  'tumblr_bb8165365fcde17cf39cda5b720033e7_2e47f716_250.gif',
  'tumblr_a3901822969773859626d41b1e9b5d46_2ebcdcc1_250.gif',
  'tumblr_412616dfe45495a9c15ad3a79e0a0b1c_761b8482_250.gif',
  'tumblr_59c6694f6731faf7cd562b1a60ab50_73baa50a_250.gif',
  'tumblr_5d980cfc8cfbc2f5daf3128f9a7aa1c7_95cf68ab_250.gif',
  'tumblr_a3324cdceb9143cb3037f74fdb03e28c_e7218ea4_250.gif',
  'tumblr_4d5c90c8d09c0d8a4a320939b0bdf52e_a1033ce1_250.webp',
  'tumblr_deb5f9b0e4d8fec0ea26a6818654d91e_3dd8354a_250.gif',
  'tumblr_c4de2f8fedcd174c70aca2ed6d9567f5_07534588_250.gif',
  'tumblr_0975c03a8ea4b4c906501f2ff3cac4b3_bf2ad3a9_250.gif',
  'ca8f826b.gif',
  'tumblr_e5b78c6fedb709e17dde4412b1561fc1_344f2aa1_250.gif',
  'tumblr_8bfed75c8edea35964cea9ecd5b2a718_8dc01200_250.gif',
  'tumblr_a01f6abce1f5e2f32e54b00797b8b572_a30019ca_250.gif',
  'tumblr_4faa4f4104fc402c875224786de34be4_06d70a56_250.gif',
  'tumblr_05e810197ae99309f5de40f52f522d60_bc0ecc77_250.gif',
  'tumblr_30f98b30e611c7c9ca42a9cfa0d75ad9_bac261e0_250.gif',
  'tumblr_8ad6e8b56dfeb3893e743f5917e1367c_d79da039_250.gif',
  'tumblr_4a37f999b14d6faa03dcd238a8aa869e_3d10d8ea_500.jpg',
  'tumblr_bbc5c7d4cfa36fdd2e8c84b4a620c3d5_4f0a012e_250.gif',
  'tumblr_58cd252b9869bd1fe74b1dadb6f4bc90_226f98f4_250.gif',
  'tumblr_f2a8cd733da7eff422e5833c8f0483bc_5522b81_250.gif',
  'pailmail -3-.gif',
  'tumblr_a0c9d392efb9e8ff3ad43a1767609e80_f9ac5227_250.gif',
  'tumblr_dde3d841004cac68a1af6d37192105b4_cb4e38c1_250.gif',
  'tumblr_3edd2b77e88c0bedde70eb9628fc6521_5b0f04e2_250.webp',
  '4009cdef.gif',
  'tumblr_f6a04426010f718cd22d173603c841b8_6230278e_250.webp',
  'tumblr_71f83444f7378a31247307c7ac0331d6_b4a3942bb_250.gif',
  'tumblr_229217d19fc8b7c0592b12939ce4e54a_8730e465_250.gif',
  'tumblr_a19f5ac49fecb6df6544efc4d562283f_e7a6570b_250.gif',
  'tumblr_12a8050b91722adc92326b35b8e872aa_58f3ff6d_250.gif',
  'tumblr_a081728e1684300420c33c1da39b31fa_92706049_250.gif',
  'tumblr_8fc5de5deba2b1a075b343b8e44c8225_779b107f_250.gif',
  'c2195f79f86e5f618af5d73ff24f15a4a111f677.gifv',
  'c7534e5e789756d84f7abb3e6c6eb49aa09ccbdb.gifv',
  'a30019cac2b4b8029f2c39048f2342657b2b860d.gifv',
  'b4a3942bb930ceca93c1647904756529742acbe4.gifv',
  'b6d882c7acac8cbcc879d1d3a67a348ead82528d.gifv',
  'bac261e0871e8a7f5a934fc56b973dce94232410.gifv',
  'bc0ecc778cfd2d9b084603fb21ebf6430ff1852e.gifv',
  'bf2ad3a97aef06e313a5659a3d6464b7b10a878.gifv',
  '50e926c4b5eb5aec114effda7a56e90d4d09cd5c.gifv',
];
const originalGifs = originalGifNames.map(name => gifMap[name]).filter(Boolean);

const leftFeatureGifs = originalGifs.slice(0, 12);
const leftStamps = originalGifs.slice(12, 24);
const centerStamps = originalGifs.slice(24, 64);
const rightStamps = originalGifs.slice(64);

function MiniPool() {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const ballsRef = useRef([]);
  const dragRef = useRef({ active: false, x: 0, y: 0 });
  const [status, setStatus] = useState("arraste a branca para mirar");

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;

    const ctx = canvas.getContext("2d");
    const width = canvas.width;
    const height = canvas.height;
    const ballRadius = 8;
    const pockets = [
      { x: 10, y: 10 },
      { x: width / 2, y: 8 },
      { x: width - 10, y: 10 },
      { x: 10, y: height - 10 },
      { x: width / 2, y: height - 8 },
      { x: width - 10, y: height - 10 },
    ];

    const createRack = () => ([
      { id: "cue", x: 72, y: height / 2, vx: 0, vy: 0, color: "#f7f7f7", active: true },
      { id: "1", x: 210, y: height / 2, vx: 0, vy: 0, color: "#b30000", active: true },
      { id: "2", x: 226, y: height / 2 - 9, vx: 0, vy: 0, color: "#d08c00", active: true },
      { id: "3", x: 226, y: height / 2 + 9, vx: 0, vy: 0, color: "#e8d8d8", active: true },
      { id: "4", x: 242, y: height / 2 - 18, vx: 0, vy: 0, color: "#681313", active: true },
      { id: "5", x: 242, y: height / 2, vx: 0, vy: 0, color: "#1f1f1f", active: true },
      { id: "6", x: 242, y: height / 2 + 18, vx: 0, vy: 0, color: "#8e1c1c", active: true },
    ]);

    ballsRef.current = createRack();

    const isTableStill = () =>
      ballsRef.current.every((ball) => !ball.active || (Math.abs(ball.vx) < 0.08 && Math.abs(ball.vy) < 0.08));

    const resetCueBall = () => {
      const cue = ballsRef.current.find((ball) => ball.id === "cue");
      if (!cue) return;
      cue.x = 72;
      cue.y = height / 2;
      cue.vx = 0;
      cue.vy = 0;
      cue.active = true;
    };

    const drawTable = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = "#160303";
      ctx.fillRect(0, 0, width, height);
      ctx.fillStyle = "#245126";
      ctx.fillRect(10, 10, width - 20, height - 20);
      ctx.strokeStyle = "#5d0b0b";
      ctx.lineWidth = 10;
      ctx.strokeRect(10, 10, width - 20, height - 20);
      ctx.strokeStyle = "rgba(255,255,255,0.18)";
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(width * 0.25, 18);
      ctx.lineTo(width * 0.25, height - 18);
      ctx.stroke();

      pockets.forEach((pocket) => {
        ctx.fillStyle = "#050505";
        ctx.beginPath();
        ctx.arc(pocket.x, pocket.y, 10, 0, Math.PI * 2);
        ctx.fill();
      });

      const cue = ballsRef.current.find((ball) => ball.id === "cue" && ball.active);
      if (dragRef.current.active && cue && isTableStill()) {
        ctx.strokeStyle = "rgba(255,255,255,0.65)";
        ctx.lineWidth = 2;
        ctx.setLineDash([6, 6]);
        ctx.beginPath();
        ctx.moveTo(cue.x, cue.y);
        ctx.lineTo(dragRef.current.x, dragRef.current.y);
        ctx.stroke();
        ctx.setLineDash([]);
      }

      ballsRef.current.forEach((ball) => {
        if (!ball.active) return;
        ctx.fillStyle = ball.color;
        ctx.beginPath();
        ctx.arc(ball.x, ball.y, ballRadius, 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = "rgba(0,0,0,0.45)";
        ctx.lineWidth = 1;
        ctx.stroke();
      });
    };

    const tick = () => {
      const balls = ballsRef.current;

      balls.forEach((ball) => {
        if (!ball.active) return;
        ball.x += ball.vx;
        ball.y += ball.vy;
        ball.vx *= 0.992;
        ball.vy *= 0.992;

        if (Math.abs(ball.vx) < 0.01) ball.vx = 0;
        if (Math.abs(ball.vy) < 0.01) ball.vy = 0;

        if (ball.x < 20 + ballRadius) {
          ball.x = 20 + ballRadius;
          ball.vx *= -0.95;
        }
        if (ball.x > width - 20 - ballRadius) {
          ball.x = width - 20 - ballRadius;
          ball.vx *= -0.95;
        }
        if (ball.y < 20 + ballRadius) {
          ball.y = 20 + ballRadius;
          ball.vy *= -0.95;
        }
        if (ball.y > height - 20 - ballRadius) {
          ball.y = height - 20 - ballRadius;
          ball.vy *= -0.95;
        }

        pockets.forEach((pocket) => {
          const dx = ball.x - pocket.x;
          const dy = ball.y - pocket.y;
          if (Math.hypot(dx, dy) < 11) {
            if (ball.id === "cue") {
              ball.active = false;
              setStatus("branca caiu, reposicionando...");
              window.setTimeout(() => {
                resetCueBall();
                setStatus("arraste a branca para mirar");
              }, 500);
            } else {
              ball.active = false;
              setStatus(`bola ${ball.id} encaçapada`);
            }
          }
        });
      });

      for (let i = 0; i < balls.length; i += 1) {
        for (let j = i + 1; j < balls.length; j += 1) {
          const a = balls[i];
          const b = balls[j];
          if (!a.active || !b.active) continue;
          const dx = b.x - a.x;
          const dy = b.y - a.y;
          const distance = Math.hypot(dx, dy);
          const minDistance = ballRadius * 2;
          if (distance === 0 || distance >= minDistance) continue;

          const nx = dx / distance;
          const ny = dy / distance;
          const overlap = (minDistance - distance) / 2;
          a.x -= nx * overlap;
          a.y -= ny * overlap;
          b.x += nx * overlap;
          b.y += ny * overlap;

          const dvx = a.vx - b.vx;
          const dvy = a.vy - b.vy;
          const impact = dvx * nx + dvy * ny;
          if (impact > 0) continue;

          const impulse = -impact;
          a.vx += -impulse * nx;
          a.vy += -impulse * ny;
          b.vx += impulse * nx;
          b.vy += impulse * ny;
        }
      }

      drawTable();
      animationRef.current = window.requestAnimationFrame(tick);
    };

    const getPoint = (event) => {
      const rect = canvas.getBoundingClientRect();
      const clientX = "touches" in event ? event.touches[0].clientX : event.clientX;
      const clientY = "touches" in event ? event.touches[0].clientY : event.clientY;
      return {
        x: ((clientX - rect.left) / rect.width) * width,
        y: ((clientY - rect.top) / rect.height) * height,
      };
    };

    const onDown = (event) => {
      if (!isTableStill()) return;
      const cue = ballsRef.current.find((ball) => ball.id === "cue" && ball.active);
      if (!cue) return;
      const point = getPoint(event);
      if (Math.hypot(point.x - cue.x, point.y - cue.y) > 34) return;
      dragRef.current = { active: true, x: point.x, y: point.y };
      setStatus("solta para tacar");
    };

    const onMove = (event) => {
      if (!dragRef.current.active) return;
      const point = getPoint(event);
      dragRef.current = { active: true, x: point.x, y: point.y };
    };

    const onUp = () => {
      if (!dragRef.current.active) return;
      const cue = ballsRef.current.find((ball) => ball.id === "cue" && ball.active);
      if (!cue) return;
      const dx = cue.x - dragRef.current.x;
      const dy = cue.y - dragRef.current.y;
      const power = Math.min(Math.hypot(dx, dy), 90) * 0.09;
      cue.vx = dx * 0.06;
      cue.vy = dy * 0.06;
      dragRef.current = { active: false, x: 0, y: 0 };
      setStatus(power > 1 ? "jogada em andamento" : "arraste a branca para mirar");
    };

    drawTable();
    animationRef.current = window.requestAnimationFrame(tick);
    canvas.addEventListener("mousedown", onDown);
    canvas.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
    canvas.addEventListener("touchstart", onDown, { passive: true });
    canvas.addEventListener("touchmove", onMove, { passive: true });
    window.addEventListener("touchend", onUp);

    return () => {
      if (animationRef.current) window.cancelAnimationFrame(animationRef.current);
      canvas.removeEventListener("mousedown", onDown);
      canvas.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);
      canvas.removeEventListener("touchstart", onDown);
      canvas.removeEventListener("touchmove", onMove);
      window.removeEventListener("touchend", onUp);
    };
  }, []);

  return (
    <div style={{ padding: "10px 10px 12px" }}>
      <canvas
        ref={canvasRef}
        width={300}
        height={186}
        style={{ width: "100%", display: "block", borderTop: "1px solid #300", borderBottom: "1px solid #300" }}
      />
      <div style={{ paddingTop: "8px", fontSize: "10px", color: "#767676", textAlign: "center" }}>
        {status}
      </div>
    </div>
  );
}

export default function ThrauzyPortfolio() {
  const [formData, setFormData] = useState({ nome: "", telefone: "", estilo: "", data: "", hora: "", obs: "" });
  const [submitted, setSubmitted] = useState(false);
  const [budgetData, setBudgetData] = useState({ corpo: "", tamanho: "", referencias: "" });
  const [budgetSubmitted, setBudgetSubmitted] = useState(false);
  const [currentMonth, setCurrentMonth] = useState('abril');
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  const fileInputRef = useRef(null);

  useEffect(() => {
    // Olhos que seguem o mouse - APENAS NO DESKTOP
    if (window.innerWidth > 768) {
      const handleMouseMove = (e) => {
        const eyes = document.querySelectorAll('.eyeball');
        eyes.forEach(eye => {
          const rect = eye.getBoundingClientRect();
          const x = rect.left + rect.width / 2;
          const y = rect.top + rect.height / 2;
          const rad = Math.atan2(e.pageX - x, e.pageY - y);
          const rot = (rad * (180 / Math.PI) * -1) + 180;
          eye.style.transform = `rotate(${rot}deg)`;
        });
      };
      window.addEventListener('mousemove', handleMouseMove);
      return () => window.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  const calendars = {
    abril: {
      name: "Abril 2026", days: 30, offset: 3, pastDays: 16,
      availability: {
        18: { type: 'large', label: "Inteiro: Sessão Grande" },
        20: { type: 'slots', label: "Livre: Manhã e Tarde" },
        22: { type: 'slots', label: "Livre: Apenas Tarde" },
        25: { type: 'large', label: "Inteiro: Braço" },
        28: { type: 'slots', label: "Livre: Manhã" },
      }
    },
    maio: {
      name: "Maio 2026", days: 31, offset: 5, pastDays: 0,
      availability: {
        2: { type: 'large', label: "Inteiro: Costas" },
        8: { type: 'slots', label: "Livre: Integral" },
        12: { type: 'slots', label: "Livre: Tarde/Noite" },
        15: { type: 'large', label: "Inteiro: Sessão Grande" },
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleBudgetSubmit = (e) => {
    e.preventDefault();
    setBudgetSubmitted(true);
  };

  const toggleMusic = () => {
    if (isPlaying) audioRef.current.pause();
    else audioRef.current.play();
    setIsPlaying(!isPlaying);
  };

  const renderCalendar = () => {
    const days = [];
    for (let i = 0; i < calendars[currentMonth].offset; i++) {
      days.push(<div key={`e${i}`} className="cal-cell cal-off"></div>);
    }
    for (let i = 1; i <= calendars[currentMonth].days; i++) {
      const isPast = i <= calendars[currentMonth].pastDays;
      const info = calendars[currentMonth].availability[i];
      const isAvailable = info && info.type === 'slots';
      const isBusy = info && info.type === 'large';
      const dateStr = `${i} de ${calendars[currentMonth].name.split(' ')[0]}`;
      const isSelected = formData.data === dateStr;
      let cls = "cal-cell";
      if (isPast || (!isAvailable && !isBusy)) cls += " cal-off";
      else if (isBusy) cls += " cal-busy";
      if (isSelected) cls += " cal-sel";
      days.push(
        <div key={`d${i}`} className={cls}
          title={info ? info.label : 'Indisponível'}
          onClick={() => { if (!isPast && (isAvailable || isBusy)) setFormData({ ...formData, data: dateStr }); }}>
          {i}
        </div>
      );
    }
    return days;
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;400;700&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700;800;900&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Crimson+Text:ital@0;1&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }

        html::before {
          content: ""; display: block; position: fixed;
          top: 0; left: 0; bottom: 0; right: 0;
          background: linear-gradient(rgba(0,0,0,0) 50%, rgba(0,0,0,0.25) 50%);
          background-size: 100% 2px;
          pointer-events: none; z-index: 9999;
        }

        body {
          background: linear-gradient(180deg, #000 0%, #000 30%, #a1318e 70%, #a1318e 100%);
          background-attachment: fixed;
          font-family: 'Nunito Sans', Arial, sans-serif;
          font-size: 13px; color: #ccc;
          overflow-x: hidden;
          will-change: transform;
        }

        @media (max-width: 768px) {
          body { font-size: 12px; }
          * { -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; }
        }

        .floaters-layer {
          position: fixed;
          inset: 0;
          pointer-events: none;
          z-index: 9999;
          overflow: hidden;
        }
        .sky-floater {
          position: absolute;
          top: -12%;
          opacity: 0.88;
          filter: drop-shadow(0 0 5px rgba(120, 0, 0, 0.55));
          will-change: transform, top;
        }
        .sky-floater img {
          display: block;
          width: 100%;
          height: auto;
        }
        .sky-floater.eye {
          animation: floater-fall linear infinite, floater-drift ease-in-out infinite;
        }
        .sky-floater.bat {
          opacity: 0.78;
          animation: bat-swoop linear infinite, bat-flutter ease-in-out infinite;
        }
        @keyframes floater-fall {
          0% { top: -14%; }
          100% { top: 108%; }
        }
        @keyframes floater-drift {
          0% { transform: translateX(0) rotate(0deg); }
          50% { transform: translateX(60px) rotate(6deg); }
          100% { transform: translateX(0) rotate(-6deg); }
        }
        @keyframes bat-swoop {
          0% { transform: translate3d(-12vw, -8vh, 0) scale(0.92); }
          50% { transform: translate3d(8vw, 40vh, 0) scale(1.08); }
          100% { transform: translate3d(-6vw, 108vh, 0) scale(0.96); }
        }
        @keyframes bat-flutter {
          0%, 100% { filter: drop-shadow(0 0 5px rgba(120, 0, 0, 0.45)); }
          50% { filter: drop-shadow(0 0 10px rgba(180, 0, 0, 0.75)); }
        }
        @media (max-width: 768px) {
          .floaters-layer { display: none; }
        }

        ::-webkit-scrollbar { width: 10px; }
        ::-webkit-scrollbar-track { background: #1a1a1a; }
        ::-webkit-scrollbar-thumb { background: #800202; border-radius: 5px; }

        a { color: #f33; text-decoration: none; }
        a:hover { color: #fff; text-decoration: underline; }

        .header { text-align: center; padding: 30px 20px 15px; display: flex; align-items: center; justify-content: center; gap: 15px; }
        .header-content { display: flex; align-items: center; gap: 15px; }
        .mouth-icon { width: 40px; height: auto; }
        .site-title {
          font-family: 'Cinzel', serif;
          font-size: 78px; color: #8b0000;
          text-shadow: 0 0 12px #f00, 0 0 35px #8b0000;
          animation: breathe 3s ease-in-out infinite;
          font-weight: 900;
          letter-spacing: 4px;
        }
        @keyframes breathe {
          0%, 100% { text-shadow: 0 0 10px #f00, 0 0 20px #8b0000; }
          50% { text-shadow: 0 0 25px #f00, 0 0 50px #8b0000; }
        }
        @media (max-width: 768px) {
          .header { padding: 15px 10px 8px; gap: 10px; }
          .site-title { font-size: 35px; text-shadow: 0 0 5px #f00, 0 0 15px #8b0000; letter-spacing: 2px; }
          .mouth-icon { width: 30px; }
        }
        @media (max-width: 480px) {
          .site-title { font-size: 28px; letter-spacing: 1px; }
          .mouth-icon { width: 24px; }
        }
        .eyeball {
          width: 20px; height: 20px;
          background: #fff;
          border-radius: 50%; display: inline-block; margin: 0 10px; border: 1px solid #555;
          vertical-align: middle; position: relative; overflow: hidden;
        }
        .eyeball::after {
          content: ""; position: absolute;
          width: 8px; height: 8px; background: #000;
          border-radius: 50%; top: 2px; left: 6px;
        }

        .main-grid {
          width: 96%; max-width: 1600px; margin: 10px auto 40px;
          display: grid; grid-template-columns: 18% 50% 1fr;
          border: 2px solid #fff; border-radius: 15px; overflow: hidden;
          box-shadow: 0 0 0 1px rgba(255,255,255,0.1), 0 0 28px rgba(161, 11, 11, 0.18);
        }
        @media (max-width: 1200px) {
          .main-grid { grid-template-columns: 16% 50% 1fr; }
        }
        @media (max-width: 900px) {
          .main-grid { grid-template-columns: 1fr; width: 95%; }
        }
        @media (max-width: 600px) {
          .main-grid { margin: 5px auto 20px; border-radius: 5px; }
        }
        @media (max-width: 768px) {
          .left { display: none; }
          .center { order: 1; border-right: none; }
          .right {
            order: 2;
            border-top: 2px solid #fff;
          }
          .mobile-hide { display: none !important; }
          .mobile-soft-hide { display: none !important; }
          .mobile-priority-box {
            border-top: 2px solid #fff;
            scroll-margin-top: 16px;
          }
        }
        @media (max-width: 480px) {
          .main-grid { width: 96%; }
        }

        .left { background: #000; border-right: 2px solid #fff; }
        .center { background: #000; border-right: 2px solid #fff; }
        .right { background: #000; }

        .box { border-bottom: 2px solid #fff; background: linear-gradient(180deg, rgba(8,8,8,0.92), rgba(0,0,0,0.98)); }
        .box-head {
          color: #fff; font-weight: bold; padding: 10px 14px; border-bottom: 1px solid #333; font-size: 16px;
          background: linear-gradient(180deg, rgba(30, 0, 0, 0.9), rgba(0, 0, 0, 0.95));
          letter-spacing: 0.04em;
          text-transform: lowercase;
        }
        .box-body { padding: 16px; font-size: 15px; line-height: 1.6; }

        @media (max-width: 768px) {
          .box-head { padding: 6px 8px; font-size: 12px; }
          .box-body { padding: 10px; }
        }
        @media (max-width: 480px) {
          .box { border-bottom: 1px solid #555; }
          .box-head { padding: 4px 6px; font-size: 11px; }
          .box-body { padding: 8px; }
        }

        .red-head {
          background: linear-gradient(180deg, #a10b0b, #400);
          color: #fff; padding: 12px 14px; font-size: 14px;
          text-align: right; border-bottom: 2px solid #fff;
          line-height: 1.8;
          box-shadow: inset 0 -14px 24px rgba(0,0,0,0.22);
        }
        .red-head a { color: #fff; }
        .red-head a:hover { color: #ffd2d2; text-decoration: none; }

        .nav { list-style: none; }
        .nav li { margin-bottom: 8px; }
        .nav a {
          color: #f33; font-size: 14px; text-decoration: none;
        }

        .music-box {
          background: linear-gradient(180deg, #a10b0b, #000);
          border-bottom: 2px solid #fff; border-top: 2px solid #fff;
          text-align: center; padding: 14px;
        }
        @media (max-width: 480px) {
          .music-box { padding: 10px; }
        }
        .music-label { color: #ccc; font-size: 13px; margin-bottom: 10px; }
        @media (max-width: 480px) {
          .music-label { font-size: 11px; margin-bottom: 8px; }
        }
        .play-btn {
          width: 56px; height: 56px; border-radius: 50%;
          background: radial-gradient(circle, #a10b0b 40%, #400 100%);
          border: 2px solid #fff; cursor: pointer;
          display: inline-flex; align-items: center; justify-content: center;
          color: #fff; font-size: 18px;
        }
        @media (max-width: 480px) {
          .play-btn { width: 40px; height: 40px; font-size: 14px; }
        }
        .play-btn:hover { background: radial-gradient(circle, #f00 40%, #a10b0b 100%); }
        .play-btn { font-size: 20px; }

        .port-grid {
          display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px; padding: 15px;
        }
        @media (max-width: 900px) { .port-grid { gap: 8px; padding: 10px; } }
        @media (max-width: 600px) { .port-grid { grid-template-columns: 1fr; gap: 8px; padding: 8px; } }
        @media (max-width: 400px) { .port-grid { gap: 4px; padding: 4px; } }
        
        .side-video {
          border: 1px solid #444; border-radius: 5px; overflow: hidden; margin: 10px 0;
        }
        .side-video video {
          width: 100%; height: auto; display: block;
        }
        .side-embed {
          width: 100%;
          height: 340px;
          display: block;
          border: none;
          background: #050505;
        }
        @media (max-width: 768px) {
          .side-embed { height: 280px; }
        }
        .arcade-box {
          background: linear-gradient(180deg, #050505, #0d0000);
          box-shadow: inset 0 0 18px rgba(255, 0, 0, 0.08);
        }
        .pet-shell {
          margin: 10px;
          padding: 8px;
          border: 1px solid #5a0d0d;
          background: linear-gradient(180deg, #090909, #140404);
          box-shadow: inset 0 0 12px rgba(255,255,255,0.04);
        }
        .pet-caption {
          padding-top: 8px;
          color: #7a7a7a;
          font-size: 10px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }
        .xp-pinball {
          padding: 8px;
          background: #c0c0c0;
          border-top: 1px solid #f5f5f5;
          border-left: 1px solid #f5f5f5;
          border-right: 1px solid #444;
          border-bottom: 1px solid #444;
        }
        .xp-titlebar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
          padding: 4px 6px;
          color: #fff;
          font-size: 11px;
          font-family: Tahoma, Verdana, sans-serif;
          background: linear-gradient(180deg, #2a81da 0%, #0a5ab8 48%, #08479a 100%);
          border-top: 1px solid #74b9ff;
          border-left: 1px solid #74b9ff;
          border-right: 1px solid #06336d;
          border-bottom: 1px solid #06336d;
        }
        .xp-titlebar-text {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .xp-controls {
          display: flex;
          gap: 2px;
          flex-shrink: 0;
        }
        .xp-controls span {
          width: 16px;
          height: 14px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          color: #000;
          background: linear-gradient(180deg, #f8f8f8, #cfcfcf);
          border-top: 1px solid #fff;
          border-left: 1px solid #fff;
          border-right: 1px solid #555;
          border-bottom: 1px solid #555;
          font-size: 10px;
          line-height: 1;
        }
        .xp-menubar {
          display: flex;
          gap: 14px;
          padding: 5px 8px;
          background: #ece9d8;
          color: #111;
          font-family: Tahoma, Verdana, sans-serif;
          font-size: 11px;
          border-left: 1px solid #fff;
          border-right: 1px solid #777;
          border-bottom: 1px solid #aaa;
        }
        .xp-pinball-viewport {
          position: relative;
          height: 560px;
          overflow: hidden;
          background: #245a96;
          border-left: 1px solid #fff;
          border-top: 1px solid #fff;
          border-right: 1px solid #555;
          border-bottom: 1px solid #555;
        }
        .xp-pinball-scale {
          position: absolute;
          top: 0;
          left: 50%;
          width: 700px;
          height: 880px;
          transform: translateX(-50%) scale(0.49);
          transform-origin: top center;
        }
        .xp-pinball-scale iframe {
          width: 700px;
          height: 880px;
          border: none;
          display: block;
          background: #123d72;
        }
        .xp-statusbar {
          display: flex;
          justify-content: space-between;
          gap: 8px;
          padding: 4px 6px;
          background: #ece9d8;
          color: #333;
          font-family: Tahoma, Verdana, sans-serif;
          font-size: 10px;
          border-left: 1px solid #fff;
          border-right: 1px solid #777;
          border-top: 1px solid #bbb;
          border-bottom: 1px solid #555;
        }
        .xp-statusbar a { color: #7a0000; font-weight: bold; }
        .xp-statusbar a:hover { color: #c00000; text-decoration: none; }
        .right .box {
          position: relative;
        }
        .right .box::before {
          content: "";
          position: absolute;
          inset: 0;
          border-top: 1px solid rgba(255,255,255,0.06);
          pointer-events: none;
        }
        .port-card { text-align: center; }
        .port-card video {
          width: 100%; height: 280px; object-fit: cover;
          border: 1px solid #444; display: block;
          transform: translateZ(0);
          will-change: transform;
        }
        @media (max-width: 768px) {
          .port-card video { height: 200px; }
        }
        @media (max-width: 480px) {
          .port-card video { height: 160px; }
        }
        .port-card .plabel { font-size: 12px; color: #888; margin-top: 6px; font-style: italic; }
        @media (max-width: 480px) {
          .port-card .plabel { font-size: 10px; margin-top: 4px; }
        }

        .stamps-grid {
          display: flex; flex-wrap: wrap; gap: 3px; justify-content: center; padding: 12px;
        }
        @media (max-width: 768px) {
          .stamps-grid { gap: 2px; padding: 8px; }
        }
        @media (max-width: 480px) {
          .stamps-grid { gap: 1px; padding: 4px; }
        }
        .stamps-grid img { height: 22px; image-rendering: pixelated; }
        @media (max-width: 480px) {
          .stamps-grid img { height: 16px; }
        }

        .cal-container {
          border: 2px solid #f00; margin: 15px 0; background: #050000;
        }
        @media (max-width: 480px) {
          .cal-container { margin: 10px 0; }
        }
        .cal-head {
          background: #a10b0b; color: #fff; padding: 6px 10px; font-size: 12px;
          display: flex; justify-content: space-between;
        }
        @media (max-width: 480px) {
          .cal-head { padding: 3px 6px; font-size: 10px; }
        }
        .cal-body { padding: 10px; }
        @media (max-width: 480px) {
          .cal-body { padding: 6px; }
        }
        .cal-grid { display: grid; grid-template-columns: repeat(7, 1fr); gap: 1px; background: #333; }
        .cal-cell {
          background: #000; color: #fff; text-align: center; padding: 6px 0;
          cursor: pointer; font-family: 'Courier New', monospace; font-size: 13px;
        }
        @media (max-width: 480px) {
          .cal-cell { padding: 4px 0; font-size: 10px; }
        }
        .cal-cell:hover { background: #500; }
        .cal-off { color: #333; cursor: not-allowed; text-decoration: line-through; }
        .cal-off:hover { background: #000; }
        .cal-sel { background: #f00 !important; color: #000 !important; font-weight: bold; }
        .cal-busy { color: #f55; background: #300; }

        .form-section { border-top: 2px solid #fff; padding: 18px; }
        .form-title { color: #fff; font-weight: bold; margin-bottom: 12px; font-size: 16px; }
        @media (max-width: 768px) {
          .form-section { padding: 12px; }
          .form-title { font-size: 14px; margin-bottom: 10px; }
        }
        @media (max-width: 480px) {
          .form-section { padding: 8px; }
          .form-title { font-size: 11px; margin-bottom: 8px; }
        }
        .rform { display: flex; flex-direction: column; gap: 10px; }
        @media (max-width: 480px) {
          .rform { gap: 8px; }
        }
        .rform label { font-size: 11px; color: #ccc; text-transform: uppercase; letter-spacing: 0.08em; }
        @media (max-width: 480px) {
          .rform label { font-size: 10px; }
        }
        .rform input, .rform select, .rform textarea {
          background: #111; border: 1px solid #444; color: #fff; padding: 10px;
          font-size: 14px; font-family: 'Nunito Sans', sans-serif;
        }
        @media (max-width: 480px) {
          .rform input, .rform select, .rform textarea { padding: 6px; font-size: 12px; }
        }
        .rform input:focus, .rform select:focus, .rform textarea:focus { border-color: #f00; outline: none; }
        .sub-btn {
          background: linear-gradient(180deg, #a10b0b, #400);
          border: 1px solid #fff; color: #fff; padding: 10px;
          cursor: pointer; font-weight: bold; text-transform: uppercase; font-size: 13px;
          letter-spacing: 0.08em;
          box-shadow: inset 0 1px 0 rgba(255,255,255,0.25);
        }
        @media (max-width: 480px) {
          .sub-btn { padding: 8px; font-size: 12px; }
        }
        .sub-btn:hover { background: #f00; }

        .right-stamps {
          display: grid; grid-template-columns: repeat(3, 1fr); gap: 0; padding: 0;
          grid-auto-rows: 90px;
        }
        @media (max-width: 768px) {
          .right-stamps { grid-auto-rows: 70px; }
        }
        @media (max-width: 480px) {
          .right-stamps { grid-template-columns: repeat(2, 1fr); grid-auto-rows: 50px; }
        }
        .right-stamps img {
          width: 100%; height: 100%; object-fit: cover;
          display: block; border: none;
        }
        .right-stamps img:hover { opacity: 0.8; }

        .top-strip {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
          background: #000;
          border: 1px solid #fff;
          padding: 8px 12px;
          color: #fff;
          font-size: 12px;
          letter-spacing: 0.08em;
          margin-bottom: 18px;
          overflow: hidden;
        }
        .top-strip::after {
          content: "";
          position: absolute;
          right: 0;
          top: 0;
          width: 22px;
          height: 100%;
          background: #900;
          border-left: 1px solid #fff;
        }
        .top-strip {
          animation: slide 20s linear infinite;
        }
        @keyframes slide {
          0% { transform: translateX(0); }
          50% { transform: translateX(-10px); }
          100% { transform: translateX(0); }
        }
        .top-strip img {
          width: 88px;
          height: auto;
          display: block;
        }
        .top-strip a {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
        }
        @media (max-width: 768px) {
          .top-strip {
            padding: 8px 10px;
            font-size: 10px;
            letter-spacing: 0.03em;
            gap: 8px;
          }
          .top-strip span {
            white-space: normal;
            line-height: 1.4;
          }
          .top-strip img { width: 54px; }
        }
        @media (max-width: 480px) {
          .top-strip { display: none; }
        }

        .glitch {
          position: relative;
          display: inline-block;
          color: #fff;
        }
        .glitch::before {
          content: attr(data-text);
          position: absolute;
          left: 2px;
          top: 0;
          width: 100%;
          height: 100%;
          color: #f00;
          background: #000;
          overflow: hidden;
          top: 0;
          animation: glitch-anim-1 0.3s infinite;
        }
        .glitch::after {
          content: attr(data-text);
          position: absolute;
          left: -2px;
          top: 0;
          width: 100%;
          height: 100%;
          color: #0ff;
          background: #000;
          overflow: hidden;
          animation: glitch-anim-2 0.3s infinite;
        }
        @keyframes glitch-anim-1 {
          0% { clip-path: inset(10% 0 65% 0); transform: translate(0); }
          20% { clip-path: inset(92% 0 1% 0); transform: translate(-2px, 2px); }
          40% { clip-path: inset(43% 0 1% 0); transform: translate(-2px, -2px); }
          60% { clip-path: inset(25% 0 58% 0); transform: translate(2px, -2px); }
          80% { clip-path: inset(54% 0 7% 0); transform: translate(2px, 2px); }
          100% { clip-path: inset(58% 0 43% 0); transform: translate(0); }
        }
        @keyframes glitch-anim-2 {
          0% { clip-path: inset(68% 0 21% 0); transform: translate(0); }
          20% { clip-path: inset(11% 0 58% 0); transform: translate(2px, -2px); }
          40% { clip-path: inset(69% 0 15% 0); transform: translate(-2px, 2px); }
          60% { clip-path: inset(62% 0 12% 0); transform: translate(2px, 2px); }
          80% { clip-path: inset(7% 0 64% 0); transform: translate(-2px, -2px); }
          100% { clip-path: inset(13% 0 58% 0); transform: translate(0); }
        }
        .intro-glyph {
          text-align: center;
          color: #f00;
          margin: 12px 0;
          text-shadow: 0 0 10px rgba(255,0,0,0.35);
        }
        .warning-box {
          box-shadow: 0 0 16px rgba(255, 0, 0, 0.12), inset 0 0 16px rgba(255,255,255,0.03);
        }
        .site-footnote {
          text-align: center;
          padding: 15px;
          color: #444;
          font-size: 9px;
          border-top: 2px solid #fff;
          letter-spacing: 0.08em;
          background: linear-gradient(180deg, rgba(0,0,0,0.92), rgba(20,0,10,0.95));
        }
      `}</style>

      <audio ref={audioRef} src="https://raw.githubusercontent.com/eaglezer0/musichost/main/letsroll.mp3" loop />

      
      <div className="header">
        <div className="header-content">
          <img src={mouthred} alt="mouth" className="mouth-icon" />
          <span className="site-title">thrauzy</span>
          <img src={mouthred} alt="mouth" className="mouth-icon" />
        </div>
      </div>

      <div className="main-grid">

        
        <div className="left">
          <div className="box">
            <div className="box-head">links</div>
            <div className="box-body">
              <ul className="nav">
                <li><a href="#portfolio">portfólio</a></li>
                <li><a href="#agendamento">agendamento</a></li>
                <li><a href="#orcamento">orçamento</a></li>
                <li><a href="https://drive.google.com/drive/folders/1DdXrTRBJASQok8b10nBnVc-jCRTxW87y" target="_blank" rel="noopener noreferrer">galeria</a></li>
              </ul>
            </div>
          </div>

          <div className="music-box">
            <div className="music-label">alone in my room - let's roll</div>
            <button className="play-btn" onClick={toggleMusic}>{isPlaying ? "||" : "▶"}</button>
          </div>

          <div className="top-strip mobile-soft-hide" style={{ marginBottom: '18px', width: '100%', fontSize: '11px', justifyContent: 'center', gap: '10px' }}>
            <span>WELCOME TO MY MIND! hope your eyes get strained. go visit my friend's page:</span>
            <a href="https://elegespersonalwebsite.neocities.org/" target="_blank" rel="noopener noreferrer">
            <img src={gifMap['webbuttonxp.gif']} alt="friend's page" style={{width: '60px'}} />
            </a>
          </div>

          <div className="box">
            <div className="box-head" style={{ color: '#f00' }}>bio</div>
            <div className="box-body" style={{ fontSize: '12px', lineHeight: '1.6' }}>
              <b style={{ color: '#f00' }}>thrauzy</b><br /><br />
              César | Dark Tattoo<br />
              IGNORANTGOTH<br />
              CYBERGANGSTA<br />
              Brasília | DF<br /><br />
              Artista. Tatuador especializado em blackwork, dark art,
              E em fazer arte foda! Agendamentos abertos.<br /><br />
              <span style={{ color: '#f00' }}>-thrauzy</span>
            </div>
          </div>

          
          {leftFeatureGifs.slice(0, 6).map((g, i) => (
            <div key={i} className="box mobile-hide" style={{ padding: '0' }}>
              <img src={g} style={{ width: '100%', display: 'block', borderBottom: '2px solid #fff' }} />
            </div>
          ))}

          
          <div className="box mobile-hide">
            <div className="stamps-grid" style={{ gap: '2px' }}>
              {leftStamps.map((g, i) => <img key={i} src={g} alt="" style={{ height: '18px' }} />)}
            </div>
          </div>

          
          {leftFeatureGifs.slice(6, 12).map((g, i) => (
            <div key={`f${i}`} className="box mobile-hide" style={{ padding: '0' }}>
              <img src={g} style={{ width: '100%', display: 'block', borderBottom: '2px solid #fff' }} />
            </div>
          ))}

          <div className="box mobile-hide" style={{padding: '0', borderBottom: 'none'}}>
            <img src={bgCyber} style={{width: '100%', display: 'block'}} alt="filler" />
          </div>
          <div className="box mobile-hide" style={{padding: '0', borderBottom: 'none'}}>
            <img src={demonGif} style={{width: '100%', display: 'block'}} alt="demon" />
          </div>

          <div className="box mobile-soft-hide" style={{textAlign: 'center', padding: '10px', borderTop: '2px solid #fff'}}>
            <div style={{fontSize: '10px', color: '#555'}}>est. 2025</div>
          </div>
        </div>

        
        <div className="center">
          <div className="box">
            <div className="box-head">intro</div>
            <div className="box-body">
              <p>bem-vindo ao inferno</p>
              <p style={{ marginTop: '5px' }}>
                aqui compartilho meu trabalho e minha arte. se não curtiu, pau no seu cu!
              </p>
              <div className="intro-glyph">‿̩͙⊱༒︎༻♱༺༒︎⊰‿̩͙</div>
            </div>
          </div>

          <div className="box mobile-priority-box" id="portfolio">
            <div className="box-head">projetos recentes</div>
            <div className="port-grid">
              <div className="port-card">
                <video src={vid1} autoPlay loop muted playsInline preload="none" />
                <div className="plabel">projeto 01</div>
              </div>
              <div className="port-card">
                <video src={vid2} autoPlay loop muted playsInline preload="none" />
                <div className="plabel">projeto 02</div>
              </div>
              <div className="port-card">
                <video src={vid3} autoPlay loop muted playsInline preload="none" />
                <div className="plabel">projeto 03</div>
              </div>
              <div className="port-card">
                <video src={vid4} autoPlay loop muted playsInline preload="none" />
                <div className="plabel">projeto 04</div>
              </div>
              <div className="port-card">
                <video src={vid5} autoPlay loop muted playsInline preload="none" />
                <div className="plabel">projeto 05</div>
              </div>
              <div className="port-card">
                <video src={vid6} autoPlay loop muted playsInline preload="none" />
                <div className="plabel">projeto 06</div>
              </div>
              <div className="port-card">
                <video src={vid7} autoPlay loop muted playsInline preload="none" />
                <div className="plabel">projeto 07</div>
              </div>
              <div className="port-card">
                <video src={vid8} autoPlay loop muted playsInline preload="none" />
                <div className="plabel">projeto 08</div>
              </div>
            </div>
          </div>

          
          <div className="box mobile-hide">
            <div className="stamps-grid">
              {centerStamps.map((g, i) => <img key={i} src={g} alt="" />)}
            </div>
          </div>

          
          <div className="form-section mobile-priority-box" id="orcamento">
            <div className="form-title">::: orçamento / consulta :::</div>
            {budgetSubmitted ? (
              <div style={{ color: '#0f0', textAlign: 'center', border: '1px dashed #0f0', padding: '30px' }}>
                ORÇAMENTO ENVIADO. Aguarde contato via WhatsApp com a resposta!
              </div>
            ) : (
              <form className="rform" onSubmit={handleBudgetSubmit}>
                <label>local do corpo que gostaria de tatuar:</label>
                <input 
                  value={budgetData.corpo} 
                  onChange={e => setBudgetData({ ...budgetData, corpo: e.target.value })} 
                  placeholder="Ex: braço, costas, perna..."
                  required 
                />

                <label>tamanho aproximado em centímetros:</label>
                <input 
                  value={budgetData.tamanho} 
                  onChange={e => setBudgetData({ ...budgetData, tamanho: e.target.value })} 
                  placeholder="Ex: 10cm, 5x7cm..."
                  required 
                />

                <label>referências (fotos de tattoos ou desenhos):</label>
                <textarea 
                  rows="3" 
                  value={budgetData.referencias} 
                  onChange={e => setBudgetData({ ...budgetData, referencias: e.target.value })}
                  placeholder="Descreva as referências ou o estilo que você gostaria, ou o flash que você quer..."
                />

                <div style={{marginBottom: '10px'}}>
                  <label style={{display: 'block', marginBottom: '5px'}}>anexar arquivos:</label>
                  <input 
                    type="file" 
                    ref={fileInputRef}
                    multiple
                    accept="image/*"
                    style={{
                      background: '#111', 
                      border: '1px solid #444', 
                      color: '#fff', 
                      padding: '8px',
                      cursor: 'pointer'
                    }}
                  />
                </div>

                <button type="submit" className="sub-btn">enviar orçamento</button>
              </form>
            )}
          </div>

          
          <div className="mobile-priority-box warning-box" style={{
            background: 'linear-gradient(180deg, #400, #200)',
            border: '2px solid #f00',
            padding: '15px',
            margin: '15px 15px',
            textAlign: 'center',
            color: '#fff',
            fontWeight: 'bold',
            fontSize: '13px'
          }}>
            ⚠️ NÃO MARQUE A AGENDA SE AINDA NÃO FEZ O ORÇAMENTO ⚠️
          </div>

          
          <div className="form-section mobile-priority-box" id="agendamento">
            <div className="form-title">::: agendamento / consulta :::</div>
            {submitted ? (
              <div style={{ color: '#0f0', textAlign: 'center', border: '1px dashed #0f0', padding: '30px' }}>
                MENSAGEM RECEBIDA. Aguarde contato via WhatsApp.
              </div>
            ) : (
              <form className="rform" onSubmit={handleSubmit}>
                <label>nome completo:</label>
                <input value={formData.nome} onChange={e => setFormData({ ...formData, nome: e.target.value })} required />

                <label>whatsapp / contato:</label>
                <input value={formData.telefone} onChange={e => setFormData({ ...formData, telefone: e.target.value })} required />

                <label>estilo desejado:</label>
                <select value={formData.estilo} onChange={e => setFormData({ ...formData, estilo: e.target.value })} required>
                  <option value="">- selecione -</option>
                  <option>Blackwork</option>
                  <option>HalfTone</option>
                  <option>Suminagashi</option>
                  <option>Outro / Freestyle</option>
                </select>

                
                <div className="cal-container">
                  <div className="cal-head">
                    <span>Agendamento_V1.exe</span>
                    <span>[X]</span>
                  </div>
                  <div className="cal-body">
                    <div style={{ marginBottom: '8px' }}>
                      <a href="#" onClick={e => { e.preventDefault(); setCurrentMonth('abril'); }}
                        style={{ color: currentMonth === 'abril' ? '#fff' : '#555', marginRight: '10px' }}>[Abril]</a>
                      <a href="#" onClick={e => { e.preventDefault(); setCurrentMonth('maio'); }}
                        style={{ color: currentMonth === 'maio' ? '#fff' : '#555' }}>[Maio]</a>
                    </div>
                    <div className="cal-grid">
                      {['D', 'S', 'T', 'Q', 'Q', 'S', 'S'].map((d, i) => (
                        <div key={i} className="cal-cell" style={{ background: '#111', fontWeight: 'bold', fontSize: '10px' }}>{d}</div>
                      ))}
                      {renderCalendar()}
                    </div>
                    {formData.data && (
                      <div style={{ marginTop: '8px', color: '#f55', fontSize: '11px', borderTop: '1px dashed #333', paddingTop: '5px' }}>
                        &gt; DATA: {formData.data}
                        {calendars[currentMonth].availability[parseInt(formData.data)] &&
                          ` — ${calendars[currentMonth].availability[parseInt(formData.data)].label}`}
                      </div>
                    )}
                  </div>
                </div>

                <label>período:</label>
                <select value={formData.hora} onChange={e => setFormData({ ...formData, hora: e.target.value })}>
                  <option value="">- qualquer -</option>
                  <option>Manhã (9h-12h)</option>
                  <option>Tarde (13h-17h)</option>
                  <option>Noite (18h-21h)</option>
                </select>

                <label>conceito / ideia:</label>
                <textarea rows="4" value={formData.obs} onChange={e => setFormData({ ...formData, obs: e.target.value })}
                  placeholder="Descreva sua ideia, local do corpo e tamanho..." />

                <button type="submit" className="sub-btn">enviar solicitação</button>
              </form>
            )}
          </div>
        </div>

        
        <div className="right">
          <div className="red-head mobile-priority-box">
            encontre-me<br />
            <a href="https://instagram.com/thrauzy" target="_blank" rel="noopener noreferrer">instagram</a><br />
            <a href="https://wa.me/5561981374388?text=Ol%C3%A1%20thrauzy!" target="_blank" rel="noopener noreferrer">whatsapp</a>
          </div>

          
          <div className="box arcade-box mobile-hide" style={{textAlign: 'center', padding: '10px 0'}}>
            <div className="pet-shell">
              <iframe 
                src="https://gifypet.neocities.org/pet/pet.html?name=thrauzy&dob=1767225600&gender=b&element=Fire&pet=https%3A%2F%2Fi.ibb.co%2FB2b6QVRz%2FUntitled42-20251208104901.png&map=https%3A%2F%2Fi.ibb.co%2FwZ7DP7Xq%2FUntitled43-20251208105120.png&background=https%3A%2F%2Fexternal-content.duckduckgo.com%2Fiu%2F%3Fu%3Dhttps%253A%252F%252Fbigthink.com%252Fwp-content%252Fuploads%252F2025%252F10%252FFull-Res.jpg%26f%3D1%26nofb%3D1%26ipt%3D18fe7685a9b41109c5d9cddcf89c42729562ec497b0555628d892d55234e76fd&tablecolor=%23ff486e&textcolor=white" 
                width="300" height="300" 
                frameBorder="0" scrolling="no"
                style={{display: 'block', margin: '0 auto', border: 'none'}}
              />
              <div className="pet-caption">net pet.exe</div>
            </div>
          </div>

          
          <div className="box arcade-box mobile-hide" style={{ textAlign: 'center' }}>
            <div className="box-head" style={{ color: '#f00' }}>sinuca online</div>
            <MiniPool />
          </div>

          
          <div className="box arcade-box mobile-hide" style={{ textAlign: 'center' }}>
            <div className="box-head" style={{ color: '#f00' }}>3d pinball xp</div>
            <div className="xp-pinball">
              <div className="xp-titlebar">
                <span className="xp-titlebar-text">3D Pinball for Windows - Space Cadet</span>
                <div className="xp-controls" aria-hidden="true">
                  <span>_</span>
                  <span>□</span>
                  <span>×</span>
                </div>
              </div>
              <div className="xp-menubar">
                <span>Game</span>
                <span>Options</span>
                <span>Help</span>
              </div>
              <div className="xp-pinball-viewport">
                <div className="xp-pinball-scale">
                  <iframe
                    src="https://pinball.alula.me/"
                    title="3D Pinball for Windows"
                    loading="lazy"
                    referrerPolicy="strict-origin-when-cross-origin"
                  />
                </div>
              </div>
              <div className="xp-statusbar">
                <span>space cadet online</span>
                <a href="https://pinball.alula.me/" target="_blank" rel="noopener noreferrer">abrir fora</a>
              </div>
            </div>
          </div>

          
          <div className="right-stamps mobile-hide">
            {rightStamps.map((g, i) => (
              <img key={i} src={g} alt="" />
            ))}
          </div>

          <div className="box mobile-hide" style={{padding: '0', marginTop: '10px'}}>
            <img src={nanaTrailer} style={{width: '100%', display: 'block', borderBottom: '2px solid #fff'}} alt="nana trailer" />
          </div>

          <div className="mobile-soft-hide site-footnote">
            thrauzy // 2026<br />brasília - bsb<br />made with chaos
          </div>
        </div>

      </div>

      
      <div className="floaters-layer" aria-hidden="true">
        {floatingSprites.map((sprite, i) => (
          <div
            key={`${sprite.type}-${i}`}
            className={`sky-floater ${sprite.type}`}
            style={{
              left: `${6 + (i * 15)}%`,
              width: `${sprite.size + (i % 2 === 0 ? 0 : 6)}px`,
              animationDuration: sprite.type === "bat" ? `${14 + i * 2}s, ${2.4 + (i * 0.2)}s` : `${11 + i}s, ${3 + (i * 0.15)}s`,
              animationDelay: `${i * 1.2}s, ${i * 0.35}s`,
            }}
          >
            <img src={sprite.src} alt={sprite.alt} />
          </div>
        ))}
      </div>

    </>
  );
}
