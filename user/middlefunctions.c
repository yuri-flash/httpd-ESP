#include "middlefunctions.h"
#include <esp8266.h>
extern char time_buffer_str[100];

void get_time(char* buff){
  sprintf(buff,time_buffer_str);
}
