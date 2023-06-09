import React, {useState, useEffect} from "react";
import { Box, Typography } from "@mui/material";
import { LogoSpace, FormSpace, Img } from "./styles";
import DatosUsuario from "./DatosUsuario";
import DatosPersonales from "./DatosPersonales";
import DatosEntrega from "./DatosEntrega";
import Complete from "./Complete";
import Stepper from "../Stepper";
import Step from "./Step";

//Validaciones 
import { validarEmail, validarPassword } from "./DatosUsuario/Validaciones";

const Form = () => {
  const [step, setStep] = useState(0);
  const [pasos, setPasos] = useState ({})

  //step = 0 --> <DatosUsuario />
  //step = 1 --> <DatosPersonales />
  //step = 2 --> <DatosEntrega />
  //step = 3 --> <Complete />

  useEffect( () => {
    console.log("useEffect")
  })

  useEffect(()=>{
    console.log("Se actualizo el step", step)
  }, [step])

  /*useEffect(async() => {
    try{
      const data = await fetch("https://jsonplaceholder.typicode.com/posts")
      const posts = await data.json()
      console.log(posts)
    }catch(e){
      console.log(e)
    }
  })*/

  const onSubmit = (e) => {
    e.preventDefault()
    let newStep = step + 1
    setStep(newStep)
    console.log("newSteo", newStep)
    console.log(step)
  }
  const handleChange = (element, position, currentStep, validator) =>{
    const value = element.target.value;
    const valid = validator(value);
    console.log(valid)
    console.log(value);
    console.log(position);
    console.log(currentStep);
    console.log(validator);
    }

  

  const stepFlow = {
    0: {
      inputs:[
        {
          label: "correo electrónico",
          type: "email",
          value: "",
          valid: null,
          onChange: handleChange,
          helperText: "Ingresa un correo electrónico válido",
          validator: validarEmail
        },
        {
          label: "contraseña",
          type: "password",
          value: "",
          valid: null,
          onChange: handleChange,
          helperText: "Ingresa una contraseña válida, mínimo 8 caracteres y máximo 25",
          validator: validarPassword
        },
      ],
      buttonText: "Siguiente",
      onSubmit 
    },
    1: {
      inputs:[
        {
          label: "correo electrónico",
          type: "email",
          value: "",
          valid: null,
          onChange: handleChange,
          helperText: "Ingresa un correo electrónico válido",
          validator: validarEmail
        },
        {
          label: "contraseña",
          type: "password",
          value: "",
          valid: null,
          onChange: handleChange,
          helperText: "Ingresa una contraseña válida, mínimo 8 caracteres y máximo 25",
          validator: validarPassword
        },
      ],
      buttonText: "Siguiente",
      onSubmit 
    }

  }

  const updateStep = (step) =>{
    console.log("Actualizar paso", step)
    setStep(step)
  }

  const steps = {
    0: <DatosUsuario updateStep={updateStep} />,
    1: <DatosPersonales updateStep={updateStep}/>,
    2: <DatosEntrega updateStep={updateStep}/>,
    3: <Complete updateStep={updateStep}/>,
  }
   return (
    <Box
      sx={{
        padding: "30px",
        display: "flexbox",
        flexDirection: "column",
      }}
      >
      <LogoSpace>
        <Img src={"/favicon.png"} />
        <Typography variant="h3">AluraFood</Typography>
      </LogoSpace>
      <FormSpace>
        {step < 3 && <Stepper step={step }/>}
        {/*{steps[step]}*/}
        <Step data={stepFlow[step] } step={step}/>
      </FormSpace>
    </Box>
  );
};

export default Form;
