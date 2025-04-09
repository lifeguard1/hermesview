import { pricing } from "../constants";

// Add your 3 different VR tour URLs here
const VR_TOURS = [
  "https://lifeguard1.github.io/vr_6/",
  "https://lifeguard1.github.io/vr_4/", 
  "https://lifeguard1.github.io/vr_2/"
];

const PricingList = () => {
  return (
    <div className="flex gap-[1rem] max-lg:flex-wrap">
      {pricing.map((item, index) => (
        <div
          key={item.id}
          className="w-[19rem] max-lg:w-full h-full px-6 bg-n-8 border border-n-6 rounded-[2rem] lg:w-auto even:py-14 odd:py-8 odd:my-4 relative overflow-hidden"
          style={{ minHeight: '500px', width: '500px' }}
        >
          {/* Each box gets a different VR tour */}
          <iframe
            src={VR_TOURS[index % VR_TOURS.length]} // Cycle through tours
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              border: 'none',
              borderRadius: '2rem',
            }}
            allowFullScreen
            allow="accelerometer; gyroscope; magnetometer; vr"
            title={`VR Tour ${index + 1}`}
          />
          
          
        </div>
      ))}
    </div>
  );
};

export default PricingList;