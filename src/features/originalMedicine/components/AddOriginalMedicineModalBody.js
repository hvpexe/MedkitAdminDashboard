import { useState } from "react"
import { useDispatch } from "react-redux"
import InputText from '../../../components/Input/InputText'
import ErrorText from '../../../components/Typography/ErrorText'
import { showNotification } from "../../common/headerSlice"
import { addOriginalMedicines } from "../originalMedicinesSlice"
import TextAreaInput from "../../../components/Input/TextAreaInput"

const INITIAL_MEDICINE_OBJ = {
    name : "",
    uses : "",
    dosageAndAdministration : "",
    sideEffectsAndInteractions : "",
    contraindicationsandPrecautions : "",
    numbers : 0,
    unit : "",
    notes : "",
    medicineStatus : 1
}

function AddOriginalMedicineModalBody({closeModal}){
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")
    const [originalMedicineObj, setOriginalMedicineObj] = useState(INITIAL_MEDICINE_OBJ)


    const saveNewOriginalMedicine = () => {
        if(originalMedicineObj.name.trim() === "")return setErrorMessage("Name is required!")
        else if(originalMedicineObj.uses.trim() === "")return setErrorMessage("Uses is required!")
        else if(originalMedicineObj.dosageAndAdministration.trim() === "")return setErrorMessage("Dosage And Administration is required!")
        else if(originalMedicineObj.sideEffectsAndInteractions.trim() === "")return setErrorMessage("Side Effects AndInteractions is required!")
        else if(originalMedicineObj.contraindicationsandPrecautions.trim() === "")return setErrorMessage("Contraindications and Precautions is required!")
        else if(originalMedicineObj.numbers <= 0 )return setErrorMessage("Number must greater than 0!")
        else if(originalMedicineObj.unit.trim() === "")return setErrorMessage("Unit is required!")
        else{
            let newOriginalMedicineObj = {
                "name": originalMedicineObj.name,
                "uses": originalMedicineObj.uses,
                "dosageAndAdministration": originalMedicineObj.dosageAndAdministration,
                "sideEffectsAndInteractions": originalMedicineObj.sideEffectsAndInteractions,
                "contraindicationsandPrecautions": originalMedicineObj.contraindicationsandPrecautions,
                "numbers": originalMedicineObj.numbers,
                "unit": originalMedicineObj.unit,
                "notes": originalMedicineObj.notes,
                "medicineStatus": originalMedicineObj.medicineStatus,
            }
            dispatch(addOriginalMedicines({newOriginalMedicineObj}))
            dispatch(showNotification({message : "New OriginalMedicine Added!", status : 1}))
            closeModal()
        }
    }

    const updateFormValue = ({updateType, value}) => {
        setErrorMessage("")
        setOriginalMedicineObj({...originalMedicineObj, [updateType] : value})
    }

    return(
        <>

            <InputText type="text" defaultValue={originalMedicineObj.name} updateType="name" containerStyle="mt-4" labelTitle="Name" updateFormValue={updateFormValue}/>

            <TextAreaInput type="text" defaultValue={originalMedicineObj.uses} updateType="uses" containerStyle="mt-4" labelTitle="Uses" updateFormValue={updateFormValue}/>

            <TextAreaInput type="text" defaultValue={originalMedicineObj.dosageAndAdministration} updateType="dosageAndAdministration" containerStyle="mt-4" labelTitle="Dosage And Administration" updateFormValue={updateFormValue}/>
            
            <TextAreaInput type="text" defaultValue={originalMedicineObj.sideEffectsAndInteractions} updateType="sideEffectsAndInteractions" containerStyle="mt-4" labelTitle="Side Effects And Interactions" updateFormValue={updateFormValue}/>
            
            <TextAreaInput type="text" defaultValue={originalMedicineObj.contraindicationsandPrecautions} updateType="contraindicationsandPrecautions" containerStyle="mt-4" labelTitle="Contraindications And Precautions" updateFormValue={updateFormValue}/>

            <InputText type="number" defaultValue={originalMedicineObj.numbers} updateType="numbers" containerStyle="mt-4" labelTitle="Numbers" updateFormValue={updateFormValue}/>

            <InputText type="text" defaultValue={originalMedicineObj.unit} updateType="unit" containerStyle="mt-4" labelTitle="Unit" updateFormValue={updateFormValue}/>

            <TextAreaInput type="text" defaultValue={originalMedicineObj.notes} updateType="notes" containerStyle="mt-4" labelTitle="Notes" updateFormValue={updateFormValue}/>


            <ErrorText styleClass="mt-16">{errorMessage}</ErrorText>
            <div className="modal-action">
                <button  className="btn btn-ghost" onClick={() => closeModal()}>Cancel</button>
                <button  className="btn btn-primary px-6" onClick={() => saveNewOriginalMedicine()}>Save</button>
            </div>
        </>
    )
}

export default AddOriginalMedicineModalBody