import Button from '@material-ui/core/Button';
import { handleVerify } from '../../utils/handleVerify';

export default function FrontPage() {

    const trace = [];

    const getTrace = (e) => {
        trace.push([ e.clientX, e.clientY, e.timeStamp ]);
    }

    return (
        <div 
        onMouseMove={(e) => getTrace(e)}
        className="min-h-screen w-full">
            <div className='absolute transform -translate-x-1/2 left-1/2 -translate-y-1/2 top-1/2'>
                <Button 
                onClick={() => {
                    console.log(trace);
                    handleVerify(trace).then(response => {
                        console.log(response);
                    });
                    trace.length = 0;
                }}
                variant="contained" color="primary">
                    Verify
                </Button>
            </div>
        </div>
    )
}