import img from '../imports/Extract_3__Image_1_.jpg';

export default function PdfExtract3Slide() {
  return (
    <div className="size-full overflow-hidden bg-white">
      <img src={img} alt="Top Views – Best Performing Posts" className="w-full h-full object-contain" style={{ display: 'block' }} />
    </div>
  );
}
