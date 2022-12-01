//TODO : Agregar en la versión móvil los iconos de los valores para que se desplieguen y muestren la información
import { useState } from 'react';
import Footer from "../components/Footer";
import useLiterals from "../hooks/useLiterals";
import useContent from "../hooks/useContent";
import { GrFormUp, GrFormDown } from 'react-icons/gr'

const literals = {

  pt: {

  },

  en: {

  },

  es: {
    whoWeAreTitle: 'QUIENES SOMOS',
    whoWeAreIntroduction1: 'Somos Tesab Spain S.L., distribuidor oficial de la reconocida marca irlandesa Tesab Engineering y los fabricantes Trackstack, Screenpod y JLM. Estamos especializados en el alquiler y la venta de equipos móviles de clasificación, trituración y reciclajes.',
    whoWeAreIntroduction2: 'Damos servicio principalmente a empresas dedicadas a la minería, fabricación de áridos, obra pública, movimiento de tierra y el tratamiento de residuos de construcción y demolición.',
    whoWeAreIntroduction3: 'Contamos con una amplia experiencia, avalada por nuestros más de 15 años en el mercado, ofreciendo soluciones y equipos móviles de alta calidad y rentabilidad en España, Portugal, Inglaterra y América del Sur.',
    ourMision:'NUESTRA MISIÓN ',
    whoWeAreIntroduction4: 'es proporcionar soluciones eficientes y mejorar los procesos de producción para aumentar la rentabilidad de empresas que desarrollen su actividad en el ámbito de la fabricación de áridos, reciclajes, obra civil, construcción y movimiento de tierras.',
    ourValuesTitle: 'NUESTROS VALORES',
    firstValueTitle: 'ESPECIALIZACIÓN Y ORIENTACIÓN AL CLIENTE',
    firstValueDescription: 'Especialización y conocimientos técnicos y del mercado, diferencian la empresa Tesab Spain  y nos capacitan para ser eﬁciente y diseñar proyectos personalizados. Gracias a nuestra ﬂota extensa de equipos móviles de alquiler, convertimos estos proyectos en reales, dando solución a las necesidades especíﬁcas de cada uno de nuestros clientes.',
    secondValueTitle: 'ÉTICA Y TRANSPARENCIA',
    secondValueDescription: 'En Tesab Spain no nos limitamos a ser un proveedor, creamos un vínculo de conﬁanza con  nuestros clientes convirtiéndonos en un colaborador con quien crecemos de forma conjunta. Nuestra política es ofrecer garantías reales, y un servicio pre y posventa de primer nivel.',
    thirdValueTitle: 'RENTABILIDAD Y EFICACIA',
    thirdValueDescription: 'En Tesab Spain nos comprometemos a ofrecer a nuestros clientes los equipos de mejor calidad y ayudarles a elegir el equipo más apropiado para sus necesidades, porque sabemos  que igual que calidad, la aptitud tiene un impacto significado en el ahorro de costes.',

  }
}


export default function WhoWeAre() {

  const { whoWeAreTitle, whoWeAreIntroduction1, whoWeAreIntroduction2, whoWeAreIntroduction3, ourMision, whoWeAreIntroduction4, ourValuesTitle, firstValueTitle, firstValueDescription, secondValueTitle, secondValueDescription, thirdValueTitle, thirdValueDescription } = useLiterals(literals)
  const content = useContent()
  const [toggleValueDescriptionIcon1, setToggleValueDescriptionIcon1] = useState(false);
  const [toggleValueDescriptionIcon2, setToggleValueDescriptionIcon2] = useState(false);
  const [toggleValueDescriptionIcon3, setToggleValueDescriptionIcon3] = useState(false);

  const toggleValueDescriptionVisible1 = () =>
    setToggleValueDescriptionIcon1(!toggleValueDescriptionIcon1)

  const toggleValueDescriptionVisible2 = () =>
    setToggleValueDescriptionIcon2(!toggleValueDescriptionIcon2)

  const toggleValueDescriptionVisible3 = () =>
    setToggleValueDescriptionIcon3(!toggleValueDescriptionIcon3)

  return (
    <>
      <main>
        <div className="relative">
          <img className="-z-10 object-cover w-full h-48 lg:h-112" src={content('/whoWeAre.jpg')} alt="" />
          <h1 className="absolute m-4 font-bakbakone text-center text-3xl text-white top-24 left-10 sm:text-6xl sm:top-36 sm:left-28 lg:text-8xl lg:top-72 lg:left-84">
            {whoWeAreTitle}
          </h1>
        </div>

        <div className="sm:flex sm:flex-col sm:items-center sm:gap-5">
          <div className="sm:max-w-6xl sm:flex sm:flex-col sm:items-center">
            <div className="flex  flex-col gap-5 px-4 pt-10 text-justify">
              <p className='font-alexandria'>{whoWeAreIntroduction1}</p>
              <p className='font-alexandria'>{whoWeAreIntroduction2}</p>
              <p className='font-alexandria'>{whoWeAreIntroduction3}</p>
              <p className='font-alexandria'><span className='font-bold text-xl text-amber-500'>{ourMision}</span>{whoWeAreIntroduction4}</p>
            </div>

            <div className='flex flex-col pt-10'>

              <h2 className="font-bakbakone text-center text-3xl">{ourValuesTitle}</h2>
              <div className='flex flex-col justify-center'>
                <ul className="pt-5">
                  <span className='flex'>
                    <button onClick={toggleValueDescriptionVisible1}>{toggleValueDescriptionIcon1 ? <GrFormUp size="1.5rem" /> : <GrFormDown size="1.5rem" />}</button>
                    <li className="font-bakbakone text-left m-4">{firstValueTitle}</li>
                  </span>
                  {toggleValueDescriptionIcon1 && <p className="font-alexandria text-justify m-6">{firstValueDescription}</p>}
                  <span className='flex'>
                    <button onClick={toggleValueDescriptionVisible2}>{toggleValueDescriptionIcon2 ? <GrFormUp size="1.5rem" /> : <GrFormDown size="1.5rem" />}</button>
                    <li className="font-bakbakone text-left m-4">{secondValueTitle}</li>
                  </span>
                  {toggleValueDescriptionIcon2 && <p className="font-alexandria text-justify m-6">{secondValueDescription}</p>}
                  <span className='flex'>
                    <button onClick={toggleValueDescriptionVisible3}>{toggleValueDescriptionIcon3 ? <GrFormUp size="1.5rem" /> : <GrFormDown size="1.5rem" />}</button>
                    <li className="font-bakbakone text-left m-4">{thirdValueTitle}</li>
                  </span>
                  {toggleValueDescriptionIcon3 && <p className="font-alexandria text-justify m-6">{thirdValueDescription}</p>}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
