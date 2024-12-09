import { createFileRoute } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'
import { useState } from 'react'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Checkbox } from '@/components/ui/checkbox'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CheckCircle, Plus, Trash2 } from 'lucide-react'
import useHospitalRegistration, { TDoctors, TManagers, useDoctorsRegistration, useManagerRegistration } from '@/services/useRegister'
import { useToast } from '@/hooks/use-toast'
import { ToastAction } from '@/components/ui/toast'

export const Route = createFileRoute('/register')({
  component: MultiRegistrationForm 
})
export default function MultiRegistrationForm() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState<{[key:string]: Object | any}>({
    hospital: {},
    doctors: [{}],
    managers: [{}]
  })
  const {toast} = useToast()

  
  const handleInputChange = (step: number | string, field: string, value: string | boolean, index = 0) => {
    setFormData(prev => {
      if (step === 'hospital') {
        return { ...prev, [step]: { ...prev[step], [field]: value } }
      } else {
        const newArray = [...prev[step]]
        newArray[index] = { ...newArray[index], [field]: value }
        return { ...prev, [step]: newArray }
      }
    })
  }

  const addPerson = (step: string | number) => {
    setFormData(prev => ({
      ...prev,
      [step]: [...prev[step], {}]
    }))
  }

  const removePerson = (step: string | number, index: number) => {
    setFormData(prev => ({
      ...prev,
      [step]: prev[step].filter((_: any, i: number) => i !== index)
    }))
  }

    
  const [hospitalId, setHospitaId] = useState<string | number>(0)
  console.log(hospitalId)

  const {isPending: hospitalPending, mutate:hopsitalMutate, reset: hospitalReset} = useHospitalRegistration()
  const hospitalInfoSubmit = () => {
    const currentStep = ['hospital', 'doctors', 'managers'][step - 1]
    hopsitalMutate(formData[currentStep], {
      onError: () => {
        toast({
          description: "Error while creating hospital",
          title: "An error has occured",
          action: <ToastAction altText='Try Again' onClick={hospitalReset} />,
          variant: "destructive"
        })
      }, 
      onSuccess(data) {
        setHospitaId(data.id)
      },
    })
    if(!hospitalPending) return setStep((prev) => prev + 1 as number)
  }
  const { isPending: doctorsPending, mutate: doctorMutate, reset: doctorReset } = useDoctorsRegistration()
  const doctorInfoSubmit = () => {
    const currentStep = ['hospital', 'doctors', 'managers'][step - 1]
    const updatedFormData = formData[currentStep].map((data: TDoctors) => {
      return {
        ...data,
        hospital_id: hospitalId
      }
   })    
    console.log(updatedFormData);
    doctorMutate(updatedFormData, {
      onError: () => {
        toast({
          description: "Error while creating doctor",
          title: "An error has occured",
          action: <ToastAction altText='Try Again' onClick={doctorReset} />,
          variant: "destructive"
        })
      }
    })
    if(!doctorsPending)  return setStep((prev) => prev + 1 as number)
  }
  const { isPending: managerPending, mutate: managerMutate, reset: managerReset } = useManagerRegistration()
  const managerSubmit = () => {
    const currentStep = ['hospital', 'doctors', 'managers'][step - 1]
     const updatedFormData = formData[currentStep].map((data: TManagers) => {
      return {
        ...data,
        hospital_id: hospitalId
      }
   })    

    managerMutate(updatedFormData, {
      onError: () => {
        toast({
          description: "Error while creating doctor",
          title: "An error has occured",
          action: <ToastAction altText='Try Again' onClick={managerReset} />,
          variant: "destructive"
        })
      }
    })
    if (!managerPending) return setStep((prev) => prev + 1 as number)
  }

  const Stepper = () => (
    <div className="flex justify-between mb-8">
      {['Hospital', 'Doctors', 'Managers', 'Thank You'].map((label, index) => (
        <div key={label} className="flex flex-col items-center">
          <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step > index ? 'bg-primary text-primary-foreground' : 'bg-secondary text-secondary-foreground'}`}>
            {index + 1}
          </div>
          <span className="text-xs mt-2">{label}</span>
        </div>
      ))}
    </div>
  )

  return (
    <Card className="w-[600px] max-w-full">
      <CardHeader>
        <CardTitle>{
          step === 1 ? "Hospital Registration" :
          step === 2 ? "Doctors Registration" :
          step === 3 ? "Managers Registration" :
          "Thank You!"
        }</CardTitle>
      </CardHeader>
      <CardContent>
        <Stepper />
        <form >
          {step === 1 && (
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Hospital Name</Label>
                <Input 
                  id="name" 
                  placeholder="Enter hospital name"
                  onChange={(e) => handleInputChange('hospital', 'name', e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="Enter email"
                  onChange={(e) => handleInputChange('hospital', 'email', e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="location">Location</Label>
                <Input 
                  id="location" 
                  placeholder="Enter location"
                  onChange={(e) => handleInputChange('hospital', 'location', e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="level">Level</Label>
                <Select onValueChange={(value) => handleInputChange('hospital', 'level', value)} required>
                  <SelectTrigger>
                    <SelectValue placeholder="Select level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="primary">Primary</SelectItem>
                    <SelectItem value="secondary">Secondary</SelectItem>
                    <SelectItem value="tertiary">Tertiary</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="bio">Bio</Label>
                <Textarea 
                  id="bio" 
                  placeholder="Enter hospital bio"
                  onChange={(e) => handleInputChange('hospital', 'bio', e.target.value)}
                  required
                />
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="terms" 
                  onCheckedChange={(checked) => handleInputChange('hospital', 'termsAccepted', checked)}
                  required
                />
                <Label htmlFor="terms">I accept the terms and conditions</Label>
              </div>
            </div>
          )}
          {step === 2 && (
            <div className="space-y-6">
              {formData.doctors.map((doctor: {}, index: number) => (
                <div key={index} className="space-y-4 p-4 border rounded-md">
                  <h3 className="font-semibold">Doctor {index + 1}</h3>
                  <div className="space-y-2">
                    <Label htmlFor={`username-${index}-${doctor}`}>Username</Label>
                    <Input 
                      id={`username-${index}`} 
                      placeholder="Enter username"
                      onChange={(e) => handleInputChange('doctors', 'username', e.target.value, index)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor={`password-${index}`}>Password</Label>
                    <Input 
                      id={`password-${index}`} 
                      type="password" 
                      placeholder="Enter password"
                      onChange={(e) => handleInputChange('doctors', 'password', e.target.value, index)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor={`email-${index}`}>Email</Label>
                    <Input 
                      id={`email-${index}`} 
                      type="email" 
                      placeholder="Enter email"
                      onChange={(e) => handleInputChange('doctors', 'email', e.target.value, index)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor={`name-${index}`}>Name</Label>
                    <Input 
                      id={`name-${index}`} 
                      placeholder="Enter name"
                      onChange={(e) => handleInputChange('doctors', 'name', e.target.value, index)}
                      required
                    />
                  </div>
                  {index > 0 && (
                    <Button type="button" variant="destructive" onClick={() => removePerson('doctors', index)}>
                      <Trash2 className="w-4 h-4 mr-2" />
                      Remove Doctor
                    </Button>
                  )}
                </div>
              ))}
              <span className='w-full space-x-2 flex'>
                <Button type="button" variant="outline" onClick={() => addPerson('doctors')}>
                  <Plus className="w-4 h-4 mr-2" />
                  Add Another Doctor
                </Button>
              </span>
            </div>
          )}
          {step === 3 && (
            <div className="space-y-6">
              {formData.managers.map((manager: {}, index: number) => (
                <div key={index} className="space-y-4 p-4 border rounded-md">
                  <h3 className="font-semibold">Manager {index + 1}</h3>
                  <div className="space-y-2">
                    <Label htmlFor={`username-${index}-${manager}`}>Username</Label>
                    <Input 
                      id={`username-${index}`} 
                      placeholder="Enter username"
                      onChange={(e) => handleInputChange('managers', 'username', e.target.value, index)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor={`password-${index}`}>Password</Label>
                    <Input 
                      id={`password-${index}`} 
                      type="password" 
                      placeholder="Enter password"
                      onChange={(e) => handleInputChange('managers', 'password', e.target.value, index)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor={`email-${index}`}>Email</Label>
                    <Input 
                      id={`email-${index}`} 
                      type="email" 
                      placeholder="Enter email"
                      onChange={(e) => handleInputChange('managers', 'email', e.target.value, index)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor={`name-${index}`}>Name</Label>
                    <Input 
                      id={`name-${index}`} 
                      placeholder="Enter name"
                      onChange={(e) => handleInputChange('managers', 'name', e.target.value, index)}
                      required
                    />
                  </div>
                  {index > 0 && (
                    <Button type="button" variant="destructive" onClick={() => removePerson('managers', index)}>
                      <Trash2 className="w-4 h-4 mr-2" />
                      Remove Manager
                    </Button>
                  )}
                </div>
              ))}
              <Button type="button" variant="outline" onClick={() => addPerson('managers')}>
                <Plus className="w-4 h-4 mr-2" />
                Add Another Manager
              </Button>
            </div>
          )}
          {step === 4 && (
            <div className="flex flex-col items-center space-y-4">
              <CheckCircle className="w-16 h-16 text-green-500" />
              <p className="text-center">Thank you for registering! Your information has been submitted successfully.</p>
            </div>
          )}
          <CardFooter className="flex justify-between mt-6">
            {step > 1 && step < 4 && (
              <Button type="button" variant="outline" onClick={() => setStep(step - 1)}>
                Previous
              </Button>
            )}
            {step == 1 && (
              <Button type="button" disabled={hospitalPending} onClick={hospitalInfoSubmit}>
                {hospitalPending ? 'Submiting...' : 'Next'}
              </Button>
            )}
            {step == 2 && (
              <Button type="button" disabled={doctorsPending} onClick={doctorInfoSubmit}>
                {doctorsPending ? 'Submiting...' : 'Next'}
              </Button>
            )}
            {step == 3 && (
              <Button type="button" disabled={managerPending} onClick={managerSubmit}>
                {doctorsPending ? 'Submiting...' : 'Next'}
              </Button>
            )}
          </CardFooter>
        </form>
      </CardContent>
    </Card>
  )
}