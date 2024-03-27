const LeadManagement2 = () => {
  return (
    <div className="flex space-x-5  mt-5">
      <div className="w-[660px] border-t-4 h-60 p-3 space-y-1 border-y-[#009688] shadow-lg shadow-gray-400">
        <p className="text-[#009688]">Lead stages</p>
        <div className="flex">
          <div className="space-y-7 ">
            <h1>75</h1>
            <h1>50</h1>
            <h1>25</h1>
            <h1>0</h1>
          </div>
          <div>
            <div className="mt-40">
              <h1 className=" flex ml-0 border-gray-400 w-[610px] border-b-2 mb-2 space-x-16">
                <h1 className="bg-[#009688] h-3 w-11 ml-12"></h1>
                <h1 className="bg-[#009688] w-11  ml-12"></h1>
                <h1 className="bg-[#009688] h-3 w-11 ml-12 "></h1>
                <h1 className="bg-[#009688] h-3 w-11 ml-12"></h1>
                <h1 className="bg-[#009688] h-3 w-11 ml-12"></h1>
              </h1>
            </div>
            <div className=" ml-16 flex space-x-10 mt-1">
              <h1 className="text-xs -m-2">Satisfied</h1>
              <h1 className="text-xs -m-2">Awaited Sales</h1>
              <h1 className="text-xs -m-2">Handoff to Sales</h1>
              <h1 className="text-xs -m-2">Nurturing</h1>
              <h1 className="text-xs -m-2">Quealification</h1>
            </div>
          </div>
        </div>
      </div>
      {/* ////////////////////// */}
      <div className="w-[660px] border-t-4 h-60 p-3 space-y-1 border-blue-500 shadow-lg shadow-gray-400">
        <p className="text-blue-500">current quarter leads dynamic</p>
        <div className="flex space-x-2 ">
          <div className="space-y-2">
            <h1 className="text-xs">11/2018</h1>
            <h1 className="text-xs">12/2018</h1>
            <h1 className="text-xs">1/2019</h1>
            <h1 className="text-xs">2/2019</h1>
            <h1 className="text-xs">3/2019</h1>
            <h1 className="text-xs">4/2019</h1>
            <h1 className="text-xs">5/2019</h1>
          </div>
          <div className="flex">
            <div className=" border-l-2 h-40 border-gray-400"></div>
            <div className="space-y-3">
              <h1 className="bg-blue-500 h-3 w-9 "></h1>
              <h1 className="bg-blue-500 h-3 w-12"></h1>
              <h1 className="bg-blue-500 h-3 w-16"></h1>
              <h1 className="bg-blue-500 h-3 w-6"></h1>
              <h1 className="bg-blue-500 h-3 w-[520px]"></h1>
              <h1 className="bg-blue-500 h-3 w-20"></h1>
              <h1 className="bg-blue-500 h-3 w-[75px]"></h1>
            </div>
          </div>
        </div>
        <div className="flex space-x-5">
          <h1 className="ml-[55px]">0</h1>
          <h1>5</h1>
          <h1>10</h1>
          <h1>15</h1>
          <h1>20</h1>
          <h1>25</h1>
          <h1>30</h1>
          <h1>35</h1>
          <h1>40</h1>
          <h1>45</h1>
          <h1>50</h1>
          <h1>55</h1>
          <h1>60</h1>
          <h1>65</h1>
          <h1>70</h1>
          <h1>75</h1>
        </div>
      </div>
    </div>
  );
};
export default LeadManagement2;
