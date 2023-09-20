
//importamos UseEffect, useRef (es decir que es un elemento que permanece igual aunque se recarge la página) y Chart (gráficas de chart.js, es necesario para poder usarlas)
import { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

//cositas de la gráfica xd
const Grafica = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const ctx = canvasRef.current.getContext('2d');
    const myChart = new Chart(ctx, {
      type: 'radar',
      data: {
        labels: ['HP', 'Attack', 'Sp. Def', 'Speed', 'Sp. Atk', 'Defense'],
        datasets: [{
          label: '',
          data: [120, 75, 100, 150, 120, 150],
          backgroundColor: 'rgba(0,0,0, 0.2)',
          borderColor: 'rgba(0,0,0, 1)',
          borderWidth: 1,
          pointStyle: null
        }]
      },
      options: {
        scales: {
          r: {
            beginAtZero: true,
            ticks: {
                display: false
              }
          }
        }
      }
    });
    return () => {
      myChart.destroy();
    };
  }, []);

  return (
    //damos un margen y proporciones a la gráfica para que se acomode bien e importamos la gráfica en un elemento canvas
    <div className='' style={{marginTop: "130px", marginLeft: '17px', width:'170px', height:'200'}}>
      <canvas ref={canvasRef}></canvas>
    </div>
   );
};

export default Grafica;
