import { useRouter } from 'next/router'
import useLiterals from '../../hooks/useLiterals'
import useContent from '../../hooks/useContent'

const data = {
    '700i': {
        literals: {
            pt: {
                descriptionTittle: 'Descrição',
                descriptionText: '',
                technicalSpecificationsTitle: 'Especificações técnicas',
                technicalSpecificationsText1: '',
                technicalSpecificationsText2: '',
                technicalSpecificationsText3: '',
                technicalSpecificationsText4: '',
                technicalSpecificationsText5: '',
                technicalSpecificationsText6: '',
                makeQueryButton: 'Pedido de informação',
            },

            en: {
                descriptionTittle: 'Description',
                descriptionText: '',
                technicalSpecificationsTitle: 'Technical Specifications',
                technicalSpecificationsText1: '',
                technicalSpecificationsText2: '',
                technicalSpecificationsText3: '',
                technicalSpecificationsText4: '',
                technicalSpecificationsText5: '',
                technicalSpecificationsText6: '',
                makeQueryButton: 'More information',
            },

            es: {
                descriptionTitle: 'Descripción',
                descriptionText: 'El Tesab 700i es un equipo móvil de machaqueo de alta robustez montado sobre orugas y diseñado para el machaqueo primario en frente de cantera. Dispone de un diseño único de alimentación con dos precribadores independientes que permiten al cliente obtener un producto determinado por la cinta lateral. La 700i está accionada por un motor Caterpillar de 300cv y cuenta con una machacadora de 1100 x 700mm con un sistema de ajuste hidráulico. Es el equipo idóneo para las aplicaciones más exijentes de las industrias de minería, canteras y reciclaje.',
                technicalSpecificationsTitle: 'Especificaciones Técnicas',
                technicalSpecificationsText1: 'Dimensiones de la machacadora: 1100 x 700 mm.',
                technicalSpecificationsText2: 'Profundidad de la machacadora: 1550 mm.',
                technicalSpecificationsText3: 'Tolva de 9,2 m3.',
                technicalSpecificationsText4: 'Sistema de doble alimentador independiente.',
                technicalSpecificationsText5: 'Banda magnética y cinta lateral (opcionales).',
                technicalSpecificationsText6: 'Motor diésel Caterpillar de 300 CV.',
                technicalSpecificationsText7: 'Peso: 46.720 kg.',
                makeQueryButton: 'Solicitar información',
            }
        },

        image: '/equipment/crushers/700i/700i1.jpg'
    },
    '800i': {
        literals: {
            pt: {
                descriptionTittle: 'Descrição',
                descriptionText: '',
                technicalSpecificationsTitle: 'Especificações técnicas',
                technicalSpecificationsText1: '',
                technicalSpecificationsText2: '',
                technicalSpecificationsText3: '',
                technicalSpecificationsText4: '',
                technicalSpecificationsText5: '',
                technicalSpecificationsText6: '',
                makeQueryButton: 'Pedido de informação',
            },

            en: {
                descriptionTittle: 'Description',
                descriptionText: '',
                technicalSpecificationsTitle: 'Technical Specifications',
                technicalSpecificationsText1: '',
                technicalSpecificationsText2: '',
                technicalSpecificationsText3: '',
                technicalSpecificationsText4: '',
                technicalSpecificationsText5: '',
                technicalSpecificationsText6: '',
                makeQueryButton: 'More information',
            },

            es: {
                descriptionTitle: 'Descripción',
                descriptionText: '',
                technicalSpecificationsTitle: 'Especificación técnica',
                technicalSpecificationsText1: '',
                technicalSpecificationsText2: '',
                technicalSpecificationsText3: '',
                technicalSpecificationsText4: '',
                technicalSpecificationsText5: '',
                technicalSpecificationsText6: '',
                technicalSpecificationsText7: '',
                makeQueryButton: 'Más información',
            }
        }
            image: ''
    },
    '700ie': {
        literals: {
            pt: {
                descriptionTittle: 'Descrição',
                descriptionText: '',
                technicalSpecificationsTitle: 'Especificações técnicas',
                technicalSpecificationsText1: '',
                technicalSpecificationsText2: '',
                technicalSpecificationsText3: '',
                technicalSpecificationsText4: '',
                technicalSpecificationsText5: '',
                technicalSpecificationsText6: '',
                makeQueryButton: 'Pedido de informação',
            },

            en: {
                descriptionTittle: 'Description',
                descriptionText: '',
                technicalSpecificationsTitle: 'Technical Specifications',
                technicalSpecificationsText1: '',
                technicalSpecificationsText2: '',
                technicalSpecificationsText3: '',
                technicalSpecificationsText4: '',
                technicalSpecificationsText5: '',
                technicalSpecificationsText6: '',
                makeQueryButton: 'More information',
            },

            es: {
                descriptionTitle: 'Descripción',
                descriptionText: '',
                technicalSpecificationsTitle: 'Especificación técnica',
                technicalSpecificationsText1: '',
                technicalSpecificationsText2: '',
                technicalSpecificationsText3: '',
                technicalSpecificationsText4: '',
                technicalSpecificationsText5: '',
                technicalSpecificationsText6: '',
                technicalSpecificationsText7: '',
                makeQueryButton: 'Más información',
            }
        },
                image: ''
    },

    '623CT': {
        literals: {
            pt: {
                descriptionTittle: 'Descrição',
                descriptionText: '',
                technicalSpecificationsTitle: 'Especificações técnicas',
                technicalSpecificationsText1: '',
                technicalSpecificationsText2: '',
                technicalSpecificationsText3: '',
                technicalSpecificationsText4: '',
                technicalSpecificationsText5: '',
                technicalSpecificationsText6: '',
                makeQueryButton: 'Pedido de informação',
            },

            en: {
                descriptionTittle: 'Description',
                descriptionText: '',
                technicalSpecificationsTitle: 'Technical Specifications',
                technicalSpecificationsText1: '',
                technicalSpecificationsText2: '',
                technicalSpecificationsText3: '',
                technicalSpecificationsText4: '',
                technicalSpecificationsText5: '',
                technicalSpecificationsText6: '',
                makeQueryButton: 'More information',
            },

            es: {
                descriptionTitle: 'Descripción',
                descriptionText: '',
                technicalSpecificationsTitle: 'Especificación técnica',
                technicalSpecificationsText1: '',
                technicalSpecificationsText2: '',
                technicalSpecificationsText3: '',
                technicalSpecificationsText4: '',
                technicalSpecificationsText5: '',
                technicalSpecificationsText6: '',
                technicalSpecificationsText7: '',
                makeQueryButton: 'Más información',
            }
        },
                    image: ''
    },

    '1412T': {
        literals: {
            pt: {
                descriptionTittle: 'Descrição',
                descriptionText: '',
                technicalSpecificationsTitle: 'Especificações técnicas',
                technicalSpecificationsText1: '',
                technicalSpecificationsText2: '',
                technicalSpecificationsText3: '',
                technicalSpecificationsText4: '',
                technicalSpecificationsText5: '',
                technicalSpecificationsText6: '',
                makeQueryButton: 'Pedido de informação',
            },

            en: {
                descriptionTittle: 'Description',
                descriptionText: '',
                technicalSpecificationsTitle: 'Technical Specifications',
                technicalSpecificationsText1: '',
                technicalSpecificationsText2: '',
                technicalSpecificationsText3: '',
                technicalSpecificationsText4: '',
                technicalSpecificationsText5: '',
                technicalSpecificationsText6: '',
                makeQueryButton: 'More information',
            },

            es: {
                descriptionTitle: 'Descripción',
                descriptionText: '',
                technicalSpecificationsTitle: 'Especificación técnica',
                technicalSpecificationsText1: '',
                technicalSpecificationsText2: '',
                technicalSpecificationsText3: '',
                technicalSpecificationsText4: '',
                technicalSpecificationsText5: '',
                technicalSpecificationsText6: '',
                technicalSpecificationsText7: '',
                makeQueryButton: 'Más información',
            }
        },
                    image: ''
    },

    '1012TS': {
        literals: {
            pt: {
                descriptionTittle: 'Descrição',
                descriptionText: '',
                technicalSpecificationsTitle: 'Especificações técnicas',
                technicalSpecificationsText1: '',
                technicalSpecificationsText2: '',
                technicalSpecificationsText3: '',
                technicalSpecificationsText4: '',
                technicalSpecificationsText5: '',
                technicalSpecificationsText6: '',
                makeQueryButton: 'Pedido de informação',
            },

            en: {
                descriptionTittle: 'Description',
                descriptionText: '',
                technicalSpecificationsTitle: 'Technical Specifications',
                technicalSpecificationsText1: '',
                technicalSpecificationsText2: '',
                technicalSpecificationsText3: '',
                technicalSpecificationsText4: '',
                technicalSpecificationsText5: '',
                technicalSpecificationsText6: '',
                makeQueryButton: 'More information',
            },

            es: {
                descriptionTitle: 'Descripción',
                descriptionText: '',
                technicalSpecificationsTitle: 'Especificación técnica',
                technicalSpecificationsText1: '',
                technicalSpecificationsText2: '',
                technicalSpecificationsText3: '',
                technicalSpecificationsText4: '',
                technicalSpecificationsText5: '',
                technicalSpecificationsText6: '',
                technicalSpecificationsText7: '',
                makeQueryButton: 'Más información',
            }
        },
                    image: ''
    },

    '1150TC': {
        literals: {
            pt: {
                descriptionTittle: 'Descrição',
                descriptionText: '',
                technicalSpecificationsTitle: 'Especificações técnicas',
                technicalSpecificationsText1: '',
                technicalSpecificationsText2: '',
                technicalSpecificationsText3: '',
                technicalSpecificationsText4: '',
                technicalSpecificationsText5: '',
                technicalSpecificationsText6: '',
                makeQueryButton: 'Pedido de informação',
            },

            en: {
                descriptionTittle: 'Description',
                descriptionText: '',
                technicalSpecificationsTitle: 'Technical Specifications',
                technicalSpecificationsText1: '',
                technicalSpecificationsText2: '',
                technicalSpecificationsText3: '',
                technicalSpecificationsText4: '',
                technicalSpecificationsText5: '',
                technicalSpecificationsText6: '',
                makeQueryButton: 'More information',
            },

            es: {
                descriptionTitle: 'Descripción',
                descriptionText: '',
                technicalSpecificationsTitle: 'Especificación técnica',
                technicalSpecificationsText1: '',
                technicalSpecificationsText2: '',
                technicalSpecificationsText3: '',
                technicalSpecificationsText4: '',
                technicalSpecificationsText5: '',
                technicalSpecificationsText6: '',
                technicalSpecificationsText7: '',
                makeQueryButton: 'Más información',
            }
        },
                    image: ''
    },

    'TS1550': {
        literals: {
            pt: {
                descriptionTittle: 'Descrição',
                descriptionText: '',
                technicalSpecificationsTitle: 'Especificações técnicas',
                technicalSpecificationsText1: '',
                technicalSpecificationsText2: '',
                technicalSpecificationsText3: '',
                technicalSpecificationsText4: '',
                technicalSpecificationsText5: '',
                technicalSpecificationsText6: '',
                makeQueryButton: 'Pedido de informação',
            },

            en: {
                descriptionTittle: 'Description',
                descriptionText: '',
                technicalSpecificationsTitle: 'Technical Specifications',
                technicalSpecificationsText1: '',
                technicalSpecificationsText2: '',
                technicalSpecificationsText3: '',
                technicalSpecificationsText4: '',
                technicalSpecificationsText5: '',
                technicalSpecificationsText6: '',
                makeQueryButton: 'More information',
            },

            es: {
                descriptionTitle: 'Descripción',
                descriptionText: '',
                technicalSpecificationsTitle: 'Especificación técnica',
                technicalSpecificationsText1: '',
                technicalSpecificationsText2: '',
                technicalSpecificationsText3: '',
                technicalSpecificationsText4: '',
                technicalSpecificationsText5: '',
                technicalSpecificationsText6: '',
                technicalSpecificationsText7: '',
                makeQueryButton: 'Más información',
            }
        },
                    image: ''
    },

    'TS1860': {
        literals: {
            pt: {
                descriptionTittle: 'Descrição',
                descriptionText: '',
                technicalSpecificationsTitle: 'Especificações técnicas',
                technicalSpecificationsText1: '',
                technicalSpecificationsText2: '',
                technicalSpecificationsText3: '',
                technicalSpecificationsText4: '',
                technicalSpecificationsText5: '',
                technicalSpecificationsText6: '',
                makeQueryButton: 'Pedido de informação',
            },

            en: {
                descriptionTittle: 'Description',
                descriptionText: '',
                technicalSpecificationsTitle: 'Technical Specifications',
                technicalSpecificationsText1: '',
                technicalSpecificationsText2: '',
                technicalSpecificationsText3: '',
                technicalSpecificationsText4: '',
                technicalSpecificationsText5: '',
                technicalSpecificationsText6: '',
                makeQueryButton: 'More information',
            },

            es: {
                descriptionTitle: 'Descripción',
                descriptionText: '',
                technicalSpecificationsTitle: 'Especificación técnica',
                technicalSpecificationsText1: '',
                technicalSpecificationsText2: '',
                technicalSpecificationsText3: '',
                technicalSpecificationsText4: '',
                technicalSpecificationsText5: '',
                technicalSpecificationsText6: '',
                technicalSpecificationsText7: '',
                makeQueryButton: 'Más información',
            }
        },
                    image: ''
    },

    'TS1340': {
        literals: {
            pt: {
                descriptionTittle: 'Descrição',
                descriptionText: '',
                technicalSpecificationsTitle: 'Especificações técnicas',
                technicalSpecificationsText1: '',
                technicalSpecificationsText2: '',
                technicalSpecificationsText3: '',
                technicalSpecificationsText4: '',
                technicalSpecificationsText5: '',
                technicalSpecificationsText6: '',
                makeQueryButton: 'Pedido de informação',
            },

            en: {
                descriptionTittle: 'Description',
                descriptionText: '',
                technicalSpecificationsTitle: 'Technical Specifications',
                technicalSpecificationsText1: '',
                technicalSpecificationsText2: '',
                technicalSpecificationsText3: '',
                technicalSpecificationsText4: '',
                technicalSpecificationsText5: '',
                technicalSpecificationsText6: '',
                makeQueryButton: 'More information',
            },

            es: {
                descriptionTitle: 'Descripción',
                descriptionText: '',
                technicalSpecificationsTitle: 'Especificación técnica',
                technicalSpecificationsText1: '',
                technicalSpecificationsText2: '',
                technicalSpecificationsText3: '',
                technicalSpecificationsText4: '',
                technicalSpecificationsText5: '',
                technicalSpecificationsText6: '',
                technicalSpecificationsText7: '',
                makeQueryButton: 'Más información',
            }
        },
                    image: ''
    },

    'TS2430': {
        literals: {
            pt: {
                descriptionTittle: 'Descrição',
                descriptionText: '',
                technicalSpecificationsTitle: 'Especificações técnicas',
                technicalSpecificationsText1: '',
                technicalSpecificationsText2: '',
                technicalSpecificationsText3: '',
                technicalSpecificationsText4: '',
                technicalSpecificationsText5: '',
                technicalSpecificationsText6: '',
                makeQueryButton: 'Pedido de informação',
            },

            en: {
                descriptionTittle: 'Description',
                descriptionText: '',
                technicalSpecificationsTitle: 'Technical Specifications',
                technicalSpecificationsText1: '',
                technicalSpecificationsText2: '',
                technicalSpecificationsText3: '',
                technicalSpecificationsText4: '',
                technicalSpecificationsText5: '',
                technicalSpecificationsText6: '',
                makeQueryButton: 'More information',
            },

            es: {
                descriptionTitle: 'Descripción',
                descriptionText: '',
                technicalSpecificationsTitle: 'Especificación técnica',
                technicalSpecificationsText1: '',
                technicalSpecificationsText2: '',
                technicalSpecificationsText3: '',
                technicalSpecificationsText4: '',
                technicalSpecificationsText5: '',
                technicalSpecificationsText6: '',
                technicalSpecificationsText7: '',
                makeQueryButton: 'Más información',
            }
        },
                    image: ''
    },

    'TS2600': {
        literals: {
            pt: {
                descriptionTittle: 'Descrição',
                descriptionText: '',
                technicalSpecificationsTitle: 'Especificações técnicas',
                technicalSpecificationsText1: '',
                technicalSpecificationsText2: '',
                technicalSpecificationsText3: '',
                technicalSpecificationsText4: '',
                technicalSpecificationsText5: '',
                technicalSpecificationsText6: '',
                makeQueryButton: 'Pedido de informação',
            },

            en: {
                descriptionTittle: 'Description',
                descriptionText: '',
                technicalSpecificationsTitle: 'Technical Specifications',
                technicalSpecificationsText1: '',
                technicalSpecificationsText2: '',
                technicalSpecificationsText3: '',
                technicalSpecificationsText4: '',
                technicalSpecificationsText5: '',
                technicalSpecificationsText6: '',
                makeQueryButton: 'More information',
            },

            es: {
                descriptionTitle: 'Descripción',
                descriptionText: '',
                technicalSpecificationsTitle: 'Especificación técnica',
                technicalSpecificationsText1: '',
                technicalSpecificationsText2: '',
                technicalSpecificationsText3: '',
                technicalSpecificationsText4: '',
                technicalSpecificationsText5: '',
                technicalSpecificationsText6: '',
                technicalSpecificationsText7: '',
                makeQueryButton: 'Más información',
            }
        },
                    image: ''
    },

    'TS3600': {
        literals: {
            pt: {
                descriptionTittle: 'Descrição',
                descriptionText: '',
                technicalSpecificationsTitle: 'Especificações técnicas',
                technicalSpecificationsText1: '',
                technicalSpecificationsText2: '',
                technicalSpecificationsText3: '',
                technicalSpecificationsText4: '',
                technicalSpecificationsText5: '',
                technicalSpecificationsText6: '',
                makeQueryButton: 'Pedido de informação',
            },

            en: {
                descriptionTittle: 'Description',
                descriptionText: '',
                technicalSpecificationsTitle: 'Technical Specifications',
                technicalSpecificationsText1: '',
                technicalSpecificationsText2: '',
                technicalSpecificationsText3: '',
                technicalSpecificationsText4: '',
                technicalSpecificationsText5: '',
                technicalSpecificationsText6: '',
                makeQueryButton: 'More information',
            },

            es: {
                descriptionTitle: 'Descripción',
                descriptionText: '',
                technicalSpecificationsTitle: 'Especificación técnica',
                technicalSpecificationsText1: '',
                technicalSpecificationsText2: '',
                technicalSpecificationsText3: '',
                technicalSpecificationsText4: '',
                technicalSpecificationsText5: '',
                technicalSpecificationsText6: '',
                technicalSpecificationsText7: '',
                makeQueryButton: 'Más información',
            }
        },
                    image: ''
    },

    '8042T': {
        literals: {
            pt: {
                descriptionTittle: 'Descrição',
                descriptionText: '',
                technicalSpecificationsTitle: 'Especificações técnicas',
                technicalSpecificationsText1: '',
                technicalSpecificationsText2: '',
                technicalSpecificationsText3: '',
                technicalSpecificationsText4: '',
                technicalSpecificationsText5: '',
                technicalSpecificationsText6: '',
                makeQueryButton: 'Pedido de informação',
            },

            en: {
                descriptionTittle: 'Description',
                descriptionText: '',
                technicalSpecificationsTitle: 'Technical Specifications',
                technicalSpecificationsText1: '',
                technicalSpecificationsText2: '',
                technicalSpecificationsText3: '',
                technicalSpecificationsText4: '',
                technicalSpecificationsText5: '',
                technicalSpecificationsText6: '',
                makeQueryButton: 'More information',
            },

            es: {
                descriptionTitle: 'Descripción',
                descriptionText: '',
                technicalSpecificationsTitle: 'Especificación técnica',
                technicalSpecificationsText1: '',
                technicalSpecificationsText2: '',
                technicalSpecificationsText3: '',
                technicalSpecificationsText4: '',
                technicalSpecificationsText5: '',
                technicalSpecificationsText6: '',
                technicalSpecificationsText7: '',
                makeQueryButton: 'Más información',
            }
        },
                    image: ''
    },

    '8042TSL': {
        literals: {
            pt: {
                descriptionTittle: 'Descrição',
                descriptionText: '',
                technicalSpecificationsTitle: 'Especificações técnicas',
                technicalSpecificationsText1: '',
                technicalSpecificationsText2: '',
                technicalSpecificationsText3: '',
                technicalSpecificationsText4: '',
                technicalSpecificationsText5: '',
                technicalSpecificationsText6: '',
                makeQueryButton: 'Pedido de informação',
            },

            en: {
                descriptionTittle: 'Description',
                descriptionText: '',
                technicalSpecificationsTitle: 'Technical Specifications',
                technicalSpecificationsText1: '',
                technicalSpecificationsText2: '',
                technicalSpecificationsText3: '',
                technicalSpecificationsText4: '',
                technicalSpecificationsText5: '',
                technicalSpecificationsText6: '',
                makeQueryButton: 'More information',
            },

            es: {
                descriptionTitle: 'Descripción',
                descriptionText: '',
                technicalSpecificationsTitle: 'Especificación técnica',
                technicalSpecificationsText1: '',
                technicalSpecificationsText2: '',
                technicalSpecificationsText3: '',
                technicalSpecificationsText4: '',
                technicalSpecificationsText5: '',
                technicalSpecificationsText6: '',
                technicalSpecificationsText7: '',
                makeQueryButton: 'Más información',
            }
        },
                    image: ''
    },

    'TR100': {
        literals: {
            pt: {
                descriptionTittle: 'Descrição',
                descriptionText: '',
                technicalSpecificationsTitle: 'Especificações técnicas',
                technicalSpecificationsText1: '',
                technicalSpecificationsText2: '',
                technicalSpecificationsText3: '',
                technicalSpecificationsText4: '',
                technicalSpecificationsText5: '',
                technicalSpecificationsText6: '',
                makeQueryButton: 'Pedido de informação',
            },

            en: {
                descriptionTittle: 'Description',
                descriptionText: '',
                technicalSpecificationsTitle: 'Technical Specifications',
                technicalSpecificationsText1: '',
                technicalSpecificationsText2: '',
                technicalSpecificationsText3: '',
                technicalSpecificationsText4: '',
                technicalSpecificationsText5: '',
                technicalSpecificationsText6: '',
                makeQueryButton: 'More information',
            },

            es: {
                descriptionTitle: 'Descripción',
                descriptionText: '',
                technicalSpecificationsTitle: 'Especificación técnica',
                technicalSpecificationsText1: '',
                technicalSpecificationsText2: '',
                technicalSpecificationsText3: '',
                technicalSpecificationsText4: '',
                technicalSpecificationsText5: '',
                technicalSpecificationsText6: '',
                technicalSpecificationsText7: '',
                makeQueryButton: 'Más información',
            }
        },
                    image: ''
    },

    'REC100': {
        literals: {
            pt: {
                descriptionTittle: 'Descrição',
                descriptionText: '',
                technicalSpecificationsTitle: 'Especificações técnicas',
                technicalSpecificationsText1: '',
                technicalSpecificationsText2: '',
                technicalSpecificationsText3: '',
                technicalSpecificationsText4: '',
                technicalSpecificationsText5: '',
                technicalSpecificationsText6: '',
                makeQueryButton: 'Pedido de informação',
            },

            en: {
                descriptionTittle: 'Description',
                descriptionText: '',
                technicalSpecificationsTitle: 'Technical Specifications',
                technicalSpecificationsText1: '',
                technicalSpecificationsText2: '',
                technicalSpecificationsText3: '',
                technicalSpecificationsText4: '',
                technicalSpecificationsText5: '',
                technicalSpecificationsText6: '',
                makeQueryButton: 'More information',
            },

            es: {
                descriptionTitle: 'Descripción',
                descriptionText: '',
                technicalSpecificationsTitle: 'Especificación técnica',
                technicalSpecificationsText1: '',
                technicalSpecificationsText2: '',
                technicalSpecificationsText3: '',
                technicalSpecificationsText4: '',
                technicalSpecificationsText5: '',
                technicalSpecificationsText6: '',
                technicalSpecificationsText7: '',
                makeQueryButton: 'Más información',
            }
        },
                    image: ''
    },

    'AIR-VAC': {
        literals: {
            pt: {
                descriptionTittle: 'Descrição',
                descriptionText: '',
                technicalSpecificationsTitle: 'Especificações técnicas',
                technicalSpecificationsText1: '',
                technicalSpecificationsText2: '',
                technicalSpecificationsText3: '',
                technicalSpecificationsText4: '',
                technicalSpecificationsText5: '',
                technicalSpecificationsText6: '',
                makeQueryButton: 'Pedido de informação',
            },

            en: {
                descriptionTittle: 'Description',
                descriptionText: '',
                technicalSpecificationsTitle: 'Technical Specifications',
                technicalSpecificationsText1: '',
                technicalSpecificationsText2: '',
                technicalSpecificationsText3: '',
                technicalSpecificationsText4: '',
                technicalSpecificationsText5: '',
                technicalSpecificationsText6: '',
                makeQueryButton: 'More information',
            },

            es: {
                descriptionTitle: 'Descripción',
                descriptionText: '',
                technicalSpecificationsTitle: 'Especificación técnica',
                technicalSpecificationsText1: '',
                technicalSpecificationsText2: '',
                technicalSpecificationsText3: '',
                technicalSpecificationsText4: '',
                technicalSpecificationsText5: '',
                technicalSpecificationsText6: '',
                technicalSpecificationsText7: '',
                makeQueryButton: 'Más información',
            }
        },
                    image: ''
    },

    'windshifter': {
        literals: {
            pt: {
                descriptionTittle: 'Descrição',
                descriptionText: '',
                technicalSpecificationsTitle: 'Especificações técnicas',
                technicalSpecificationsText1: '',
                technicalSpecificationsText2: '',
                technicalSpecificationsText3: '',
                technicalSpecificationsText4: '',
                technicalSpecificationsText5: '',
                technicalSpecificationsText6: '',
                makeQueryButton: 'Pedido de informação',
            },

            en: {
                descriptionTittle: 'Description',
                descriptionText: '',
                technicalSpecificationsTitle: 'Technical Specifications',
                technicalSpecificationsText1: '',
                technicalSpecificationsText2: '',
                technicalSpecificationsText3: '',
                technicalSpecificationsText4: '',
                technicalSpecificationsText5: '',
                technicalSpecificationsText6: '',
                makeQueryButton: 'More information',
            },

            es: {
                descriptionTitle: 'Descripción',
                descriptionText: '',
                technicalSpecificationsTitle: 'Especificación técnica',
                technicalSpecificationsText1: '',
                technicalSpecificationsText2: '',
                technicalSpecificationsText3: '',
                technicalSpecificationsText4: '',
                technicalSpecificationsText5: '',
                technicalSpecificationsText6: '',
                technicalSpecificationsText7: '',
                makeQueryButton: 'Más información',
            }
        },
                    image: ''
    },

}


export default function Equipment() {
    const content = useContent()
    const router = useRouter()
    const { equipmentId } = router.query
    const { descriptionTitle, descriptionText, technicalSpecificationsTitle, technicalSpecificationsText1, technicalSpecificationsText2, technicalSpecificationsText3, technicalSpecificationsText4, technicalSpecificationsText5, technicalSpecificationsText6, technicalSpecificationsText7, makeQueryButton } = useLiterals(literals)


    if (equipmentId) {
        // @ts-ignore
        const { literals, image } = data[equipmentId]
        const { title, description } = useLiterals(literals)

        return (
            <>
                <main className='items-center'>
                    <h1 className={`${bakbakOne.className} text-center text-4xl mx-4 lg:my-4`}>700i</h1>


                    <div className='lg:flex justify-center gap-x-32'>
                        <div className="flex overflow-x-auto my-4 lg:h-128 lg:w-200 lg:ml-6">
                            <video autoPlay loop muted>
                                <source src={content('/equipment/crushers/700i/700iVideo.mp4')} type="video/mp4" />
                            </video>
                            <img src={content('/equipment/crushers/700i/700i1.jpg')} />
                            <img src={content('/equipment/crushers/700i/700i2.jpg')} />
                        </div>

                        <div className='flex flex-col p-4 gap-5 lg:w-160'>

                            <h2 className="font-bold">{descriptionTitle}</h2>
                            <p className=" text-justify">{descriptionText}</p>

                            <h2 className="font-bold">{technicalSpecificationsTitle}</h2>
                            <ul className="list-disc px-4">
                                <li>{technicalSpecificationsText1}</li>
                                <li>{technicalSpecificationsText2}</li>
                                <li>{technicalSpecificationsText3}</li>
                                <li>{technicalSpecificationsText4}</li>
                                <li>{technicalSpecificationsText5}</li>
                                <li>{technicalSpecificationsText6}</li>
                                <li>{technicalSpecificationsText7}</li>
                            </ul>

                        </div>
                    </div>

                    <div className="flex justify-center sticky">
                        <Link href="/contact"><button className="bg-amber-400 my-4 px-4 py-2 font-bold rounded hover:bg-[#323A47] hover:text-amber-400 ">
                            {" "}
                            {makeQueryButton}{" "}
                        </button></Link>
                    </div>
                </main>

                <Footer />
            </>
        )
    } else return null
}