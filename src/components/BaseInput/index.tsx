import { cloneElement } from "react"
import { FormControl, FormLabel, FormHelperText, FormErrorMessage } from "@chakra-ui/react"

interface BaseInputProps {
  children: React.ReactElement

  isRequired?: boolean
  isDisabled?: boolean

  labelText?: string
  helpText?: string
  errorText?: string
}

export const BaseInput: React.FC<BaseInputProps> = ({
  children,

  isRequired = false,
  isDisabled = false,

  labelText = null,
  helpText = null,
  errorText = null,
}) => {
  return (
    <FormControl isRequired={isRequired} isDisabled={isDisabled} isInvalid={!!errorText}>
      {!!labelText ? <FormLabel>{labelText}</FormLabel> : null}

      {cloneElement(children)}

      {!!helpText && !errorText ? <FormHelperText>{helpText}</FormHelperText> : null}

      <FormErrorMessage>{errorText}</FormErrorMessage>
    </FormControl>
  )
}
