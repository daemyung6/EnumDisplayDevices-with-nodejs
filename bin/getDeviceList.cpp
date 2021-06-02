#include <windows.h>
#include <stdio.h>

#pragma comment(lib, "user32.lib")

void DumpDevice(const DISPLAY_DEVICE& dd, size_t nSpaceCount )
{
    printf("%*sDeviceName: %s\n", nSpaceCount, "", dd.DeviceName );
    printf("%*sDeviceString: %s\n", nSpaceCount, "", dd.DeviceString );
    printf("%*sStateFlags: %x\n", nSpaceCount, "", dd.StateFlags );
    printf("%*sDeviceID: %s\n", nSpaceCount, "", dd.DeviceID );
    printf("%*sDeviceKey: ...%s\n", nSpaceCount, "", dd.DeviceKey+42 );
}

int main()
{
    DISPLAY_DEVICE dd;

    dd.cb = sizeof(DISPLAY_DEVICE);

    DWORD deviceNum = 0;
    while( EnumDisplayDevices(NULL, deviceNum, &dd, 0) ){
        puts("deviceSTART");
        DumpDevice( dd, 2 );
        DISPLAY_DEVICE newdd = {0};
        newdd.cb = sizeof(DISPLAY_DEVICE);
        DWORD monitorNum = 0;
        
        while ( EnumDisplayDevices(dd.DeviceName, monitorNum, &newdd, 0))
        {
            puts("  childSTART");
            DumpDevice( newdd, 4 );
            puts("  childEND");
            monitorNum++;
        }
        puts("deviceEND");
        deviceNum++;
    }

    return 0;
}