import AuthLayout from '@/components/layouts/auth-layouts'
import Activation from '@/components/views/Auth/Activation'
import authServices from '@/services/auth.service'
import React from 'react'


interface Proptypes {
    status: 'success' | 'failed'
}



const activationPage = (props: Proptypes) => {
  return (
    <AuthLayout title='Activation Code'>
        <Activation {...props}/>
    </AuthLayout>
  )
}

export async function getServerSideProps(context: {query: {code: string}}) {
    try {    
        const result = await authServices.activation({ code: context.query.code }) as unknown as { data: { data: any } };

        console.log(result.data.data)
        if(result?.data?.data ) {
            return {
                props: {
                    status: 'success'
                }
            }
        }else {
            return {
                props: {
                    status: 'failed'
                }
            }
        }
    } catch (error) {
        return {
            props: {
                status: 'failed'
            }
        }
    }
}

export default activationPage