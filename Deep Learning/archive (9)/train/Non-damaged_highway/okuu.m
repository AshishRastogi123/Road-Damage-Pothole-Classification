clc,clear all,close all
dosya=dir('*.*g');
for k=1:length(dosya)
    try
        res=imread(dosya(k).name);
        [ss,aa,jj]=size(res);
        if jj<3
            res(:,:,1)=res(:,:,1); res(:,:,2)=res(:,:,1);
            res(:,:,3)=res(:,:,1);
        end
        res=imresize(res,[256,256]);
        imwrite(res,dosya(k).name);
    catch 
        delete(dosya(k).name);
        dosya(k).name
    end
end